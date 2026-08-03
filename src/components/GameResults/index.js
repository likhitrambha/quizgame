import {useContext} from 'react'
import {useHistory} from 'react-router-dom'

import Header from '../Header'
import QuizContext from '../../Context/QuizContext'

import './index.css'

const GameResults = () => {
  const history = useHistory()

  const {questions, score} = useContext(QuizContext)

  const totalQuestions = questions.length

  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0

  const isPassed = percentage >= 60

  const onClickReport = () => {
    history.push('/game-report')
  }

  return (
    <>
      <Header />

      <div className="game-results-container">
        <div
          className={`results-card ${
            isPassed ? 'passed-results-card' : 'failed-results-card'
          }`}
        >
          <img
            src={
              isPassed
                ? 'https://assets.ccbp.in/frontend/react-js/quiz-game-congrats-trophy-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/quiz-game-lose-img.png'
            }
            alt={isPassed ? 'won' : 'lose'}
            className={isPassed ? 'trophy-image' : 'failure-image'}
          />

          <h1 className="result-title">{isPassed ? 'Congrats' : 'You lose'}</h1>

          <h2 className="result-percentage">
            {percentage}% Correctly Answered
          </h2>

          {isPassed && (
            <p className="result-description">Quiz completed successfully</p>
          )}

          <p className="attempts-text">
            You attempted {score} out of {totalQuestions} questions as correct
          </p>

          <button
            type="button"
            className="report-button"
            onClick={onClickReport}
          >
            Report
          </button>
        </div>
      </div>
    </>
  )
}

export default GameResults
