import './index.css'

const ScoreSummary = props => {
  const {totalQuestions, correctAnswers, wrongAnswers, unattempted} = props

  return (
    <div className="score-summary-card">
      <div className="score-circle">
        <span className="score-value">{correctAnswers}</span>
        <span className="score-total">/{totalQuestions}</span>
      </div>

      <div className="score-details">
        <div className="score-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-right-check-img.png"
            alt="correct answer icon"
            className="score-icon"
          />
          <p className="count">{correctAnswers} Correct answers</p>
        </div>

        <div className="score-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-wrong-check-img.png"
            alt="incorrect answer icon"
            className="score-icon"
          />
          <p className="count">{wrongAnswers} Incorrect answers</p>
        </div>

        <div className="score-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/quiz-game-un-answered-img.png"
            alt="unattempted questions icon"
            className="score-icon"
          />
          <p className="count">{unattempted} Unattempted</p>
        </div>
      </div>
    </div>
  )
}

export default ScoreSummary
