import {useContext} from 'react'

import Header from '../Header'
import ScoreSummary from './ScoreSummary'
import QuestionReport from './QuestionReport'
import QuizContext from '../../Context/QuizContext'

import './index.css'

const GameReport = () => {
  const {questions, answers} = useContext(QuizContext)

  const totalQuestions = questions.length

  const correctAnswers = answers.filter(each => each.isCorrect).length

  const attempted = answers.length

  const wrongAnswers = attempted - correctAnswers

  const unattempted = totalQuestions - attempted

  const unattemptedQuestions = questions.filter(
    question => !answers.find(answer => answer.questionId === question.id),
  )

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

        <section className="questions-container">
          {unattempted === 0 ? (
            <h1 className="attempted-all-text">Attempted all the questions</h1>
          ) : (
            unattemptedQuestions.map((question, index) => (
              <QuestionReport
                key={question.id}
                question={question}
                index={index}
              />
            ))
          )}
        </section>
      </div>
    </div>
  )
}

export default GameReport
