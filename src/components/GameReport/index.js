import {useContext} from 'react'

import Header from '../Header'
import ScoreSummary from './ScoreSummary'
import QuestionReport from './QuestionReport'
import QuizContext from '../../Context/QuizContext'

import './index.css'

const GameReport = () => {
  const {questions, answers} = useContext(QuizContext)

  const totalQuestions = questions.length

  const attemptedAnswers = answers.filter(each => each.selectedOptionId !== '')

  const attempted = attemptedAnswers.length

  const correctAnswers = attemptedAnswers.filter(each => each.isCorrect).length

  const wrongAnswers = attempted - correctAnswers

  const unattemptedQuestions = questions.filter(question => {
    const answer = answers.find(each => each.questionId === question.id)

    return !answer || answer.selectedOptionId === ''
  })

  const unattempted = unattemptedQuestions.length

  return (
    <div className="game-report-bg-container">
      <Header />

      <div className="game-report-container">
        <h1 className="game-report-heading">Game Report</h1>

        <ScoreSummary
          attempted={attempted}
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          unattempted={unattempted}
        />

        {unattempted === 0 ? (
          <h1 className="attempted-all-text">Attempted all the questions</h1>
        ) : (
          <ul className="questions-container">
            {unattemptedQuestions.map((question, index) => (
              <li key={question.id}>
                <QuestionReport question={question} index={index} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default GameReport
