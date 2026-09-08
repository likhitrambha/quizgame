import './index.css'

const DefaultOptions = props => {
  const {options, selectedOptionId, onSelectOption, isAnswered} = props

  return (
    <ul className="default-options-list">
      {options.map(option => {
        let buttonClassName = 'default-option-button'
        let icon = null

        if (isAnswered) {
          if (option.is_correct === 'true') {
            buttonClassName += ' default-correct-option'
            icon = (
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                className="status-icon correct-icon"
                alt="correct checked circle"
              />
            )
          } else if (selectedOptionId === option.id) {
            buttonClassName += ' default-wrong-option'
            icon = (
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-close-circle-img.png"
                className="status-icon wrong-icon"
                alt="incorrect close circle"
              />
            )
          }
        }

        return (
          <li key={option.id} className="default-option-item">
            <div className="default-option-wrapper">
              <button
                type="button"
                className={buttonClassName}
                onClick={() => onSelectOption(option.id)}
                disabled={isAnswered}
              >
                {option.text}
              </button>

              <div className="default-icon-container">{icon}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default DefaultOptions
