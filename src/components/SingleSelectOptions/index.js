import './index.css'

const SingleSelectOptions = props => {
  const {options, selectedOptionId, onSelectOption, isAnswered} = props

  return (
    <ul className="single-select-list">
      {options.map(option => {
        let icon = null

        if (isAnswered) {
          if (option.is_correct === 'true') {
            icon = (
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                className="status-icon correct-icon"
              />
            )
          } else if (selectedOptionId === option.id) {
            icon = (
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-close-circle-img.png"
                className="status-icon wrong-icon"
              />
            )
          }
        }

        return (
          <li key={option.id} className="single-select-item">
            <div className="single-select-wrapper">
              <input
                id={option.id}
                type="radio"
                name="single-select"
                checked={selectedOptionId === option.id}
                disabled={isAnswered}
                onChange={() => onSelectOption(option.id)}
              />

              <label htmlFor={option.id} className="radio-label">
                {option.text}
              </label>

              {icon}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default SingleSelectOptions
