import './index.css'

const ImageOptionList = props => {
  const {options} = props

  return (
    <ul className="report-image-options-list">
      {options.map(option => {
        const isCorrect = option.is_correct === 'true'

        return (
          <li key={option.id} className="report-image-option-item">
            <div className="report-image-option-wrapper">
              <img
                src={option.image_url}
                alt={option.text}
                className={
                  isCorrect
                    ? 'report-correct-image'
                    : 'report-image-option-image'
                }
              />

              {isCorrect && (
                <div className="report-image-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/quiz-game-check-circle-img.png"
                    className="status-icon correct-icon"
                    alt="correct checked circle"
                  />
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ImageOptionList
