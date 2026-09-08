import {BsCheckLg, BsXLg, BsCircleFill} from 'react-icons/bs'
import './index.css'

const ScoreSummary = props => {
  const {
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    attempted,
    unattempted,
  } = props

  return (
    <div className="score-summary-card">
      <div className="score-circle">
        <span className="score-value">{attempted}</span>
        <span className="score-total">/{totalQuestions}</span>
      </div>

      <div className="score-details">
        <p className="summary-item">
          <BsCheckLg className="summary-icon correct-icon" />
          {correctAnswers} Correct answers
        </p>

        <p className="summary-item">
          <BsXLg className="summary-icon wrong-icon" />
          {wrongAnswers} Incorrect answers
        </p>

        <p className="summary-item">
          <BsCircleFill className="summary-icon unattempted-icon" />
          {unattempted} Unattempted
        </p>
      </div>
    </div>
  )
}

export default ScoreSummary
