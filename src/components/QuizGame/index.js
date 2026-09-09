import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import LoadingView from '../Loader'
import DefaultOptions from '../DefaultOptions'
import ImageOptions from '../ImageOptions'
import SingleSelectOptions from '../SingleSelectOptions'
import QuizContext from '../../Context/QuizContext'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class QuizGame extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    questions: [],
    totalQuestions: 0,
    currentQuestionIndex: 0,
    selectedOptionId: '',
    answers: [],
    score: 0,
    timer: 15,
  }

  componentDidMount() {
    this.getQuestions()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer = () => {
    this.stopTimer()

    this.timerId = setInterval(() => {
      const {timer} = this.state

      if (timer <= 1) {
        this.stopTimer()
        this.setState({timer: 0}, () => {
          this.onClickNext()
        })
      } else {
        this.setState(prevState => ({
          timer: prevState.timer - 1,
        }))
      }
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  getQuestions = async () => {
    this.setState({
      apiStatus: apiStatusConstants.loading,
      currentQuestionIndex: 0,
      selectedOptionId: '',
      answers: [],
      score: 0,
      timer: 15,
    })

    try {
      const url = 'https://apis.ccbp.in/assess/questions'

      const jwtToken = Cookies.get('jwt_token')

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })

      if (response.ok) {
        const data = await response.json()

        this.setState(
          {
            questions: data.questions,
            totalQuestions: data.questions.length,
            apiStatus: apiStatusConstants.success,
          },
          this.startTimer,
        )
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onSelectOption = id => {
    this.stopTimer()
    const {selectedOptionId, questions, currentQuestionIndex, answers, score} =
      this.state

    if (selectedOptionId !== '') {
      return
    }

    const currentQuestion = questions[currentQuestionIndex]

    const selectedOption = currentQuestion.options.find(
      option => option.id === id,
    )

    const isCorrect = selectedOption.is_correct === 'true'

    this.setState({
      selectedOptionId: id,
      answers: [
        ...answers,
        {
          questionId: currentQuestion.id,
          selectedOptionId: id,
          isCorrect,
        },
      ],
      score: isCorrect ? score + 1 : score,
    })
  }

  onClickNext = () => {
    this.stopTimer()

    const {
      questions,
      totalQuestions,
      currentQuestionIndex,
      answers,
      score,
      selectedOptionId,
    } = this.state

    const {history} = this.props

    const {setQuestions, setTotalQuestions, setAnswers, setScore} = this.context

    let updatedAnswers = answers

    if (selectedOptionId === '') {
      updatedAnswers = [
        ...answers,
        {
          questionId: questions[currentQuestionIndex].id,
          selectedOptionId: '',
          isCorrect: false,
        },
      ]
    }

    if (currentQuestionIndex < questions.length - 1) {
      this.setState(
        {
          currentQuestionIndex: currentQuestionIndex + 1,
          selectedOptionId: '',
          answers: updatedAnswers,
          timer: 15,
        },
        this.startTimer,
      )
    } else {
      setQuestions(questions)
      setTotalQuestions(totalQuestions)
      setAnswers(updatedAnswers)
      setScore(score)

      history.replace('/game-results')
    }
  }

  renderLoadingView = () => (
    <div className="question-card">
      <LoadingView />
    </div>
  )

  renderFailureView = () => (
    <div className="question-card">
      <div className="failure-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-assess-failure-img.png"
          alt="failure view"
          className="failure-image"
        />

        <h1>Something went wrong</h1>

        <p className="failure-description">
          Our servers are busy please try again
        </p>

        <button
          type="button"
          className="retry-button"
          onClick={this.getQuestions}
        >
          Retry
        </button>
      </div>
    </div>
  )

  renderSuccessView = () => {
    const {
      questions,
      totalQuestions,
      timer,
      currentQuestionIndex,
      selectedOptionId,
    } = this.state

    const currentQuestion = questions[currentQuestionIndex]
    const {options_type: optionsType} = currentQuestion

    return (
      <div className="question-card">
        <div className="question-header">
          <div className="question-badge">
            <p className="badge-title">Question</p>

            <p className="badge-count">
              {currentQuestionIndex + 1}/{totalQuestions}
            </p>
          </div>

          <div className="timer-circle">
            <p className="timer-text">{timer}</p>
          </div>
        </div>

        <p className="question-text">{currentQuestion.question_text}</p>

        {optionsType === 'DEFAULT' && (
          <DefaultOptions
            options={currentQuestion.options}
            selectedOptionId={selectedOptionId}
            onSelectOption={this.onSelectOption}
            isAnswered={selectedOptionId !== ''}
          />
        )}

        {optionsType === 'IMAGE' && (
          <ImageOptions
            options={currentQuestion.options}
            selectedOptionId={selectedOptionId}
            onSelectOption={this.onSelectOption}
            isAnswered={selectedOptionId !== ''}
          />
        )}

        {optionsType === 'SINGLE_SELECT' && (
          <SingleSelectOptions
            options={currentQuestion.options}
            selectedOptionId={selectedOptionId}
            onSelectOption={this.onSelectOption}
            isAnswered={selectedOptionId !== ''}
          />
        )}
        {currentQuestionIndex === questions.length - 1 ? (
          <button
            type="button"
            className="next-button"
            onClick={this.onClickNext}
            disabled={selectedOptionId === ''}
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            className="next-button"
            onClick={this.onClickNext}
            disabled={selectedOptionId === ''}
          >
            Next Question
          </button>
        )}
      </div>
    )
  }

  renderQuizGame = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()

      case apiStatusConstants.success:
        return this.renderSuccessView()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />

        <div className="quiz-container">{this.renderQuizGame()}</div>
      </>
    )
  }
}

QuizGame.contextType = QuizContext

export default QuizGame
