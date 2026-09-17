import './index.css'

const ImageOptionList = props => {
  const {question} = props
  const {options} = question

  return (
    <>
      {options.map(option => {
        const isCorrect =
          option.is_correct === 'true' || option.is_correct === true

        return (
          <li
            key={option.id}
            className={`option-container ${isCorrect ? 'correct' : ''}`}
          >
            <button
              type="button"
              className={`option ${isCorrect ? 'correct' : ''}`}
              aria-label={option.text}
              disabled
            >
              <img
                src={option.image_url}
                alt={option.text}
                className="option-image"
              />
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

export default ImageOptionList
