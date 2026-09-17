import './index.css'

const SingleSelectList = props => {
  const {question} = props
  const {options} = question

  return (
    <>
      {options.map(option => {
        const isCorrect =
          option.is_correct === 'true' || option.is_correct === true

        return (
          <li key={option.id} className="option-container single-select">
            <input
              type="radio"
              id={option.id}
              name={`singleSelectOption-${question.id}`}
              className="single-select-radio"
              checked={isCorrect}
              disabled
              readOnly
              aria-label={option.text}
            />
            <label htmlFor={option.id} className="single-select-label">
              {option.text}
              {isCorrect && (
                <img
                  className="option-icon"
                  src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                  alt="correct checked circle"
                />
              )}
            </label>
          </li>
        )
      })}
    </>
  )
}

export default SingleSelectList
