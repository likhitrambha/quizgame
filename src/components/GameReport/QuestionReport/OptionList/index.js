import './index.css'

const OptionList = props => {
  const {question} = props
  const {options} = question

  return (
    <>
      {options.map((option, index) => {
        const isCorrect =
          option.is_correct === 'true' || option.is_correct === true

        return (
          <li
            key={option.id}
            className={`option-container ${isCorrect ? 'correct' : ''}`}
          >
            <span>{`${String.fromCharCode(65 + index)}. `}</span>
            <button
              type="button"
              className={`option ${isCorrect ? 'correct' : ''}`}
              aria-label={option.text}
              disabled
            >
              {option.text}
              {isCorrect && (
                <img
                  className="option-icon"
                  src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                  alt="correct checked circle"
                />
              )}
            </button>
          </li>
        )
      })}
    </>
  )
}

export default OptionList
