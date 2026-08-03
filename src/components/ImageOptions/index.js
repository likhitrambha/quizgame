import {BsCheckCircleFill, BsXCircleFill} from 'react-icons/bs'

import './index.css'

const ImageOptions = props => {
  const {options, selectedOptionId, onSelectOption, isAnswered} = props

  return (
    <ul className="quiz-image-options-list">
      {options.map(option => {
        let buttonClassName = 'quiz-image-option-button'
        let icon = null

        if (isAnswered) {
          if (option.is_correct === 'true') {
            buttonClassName += ' quiz-image-correct-option'
            icon = (
              <BsCheckCircleFill className="quiz-image-status-icon quiz-image-correct-icon" />
            )
          } else if (selectedOptionId === option.id) {
            buttonClassName += ' quiz-image-wrong-option'
            icon = (
              <BsXCircleFill className="quiz-image-status-icon quiz-image-wrong-icon" />
            )
          }
        } else if (selectedOptionId === option.id) {
          buttonClassName += ' quiz-image-active-option'
        }

        return (
          <li key={option.id} className="quiz-image-option-item">
            <div className="quiz-image-option-wrapper">
              <button
                type="button"
                className={buttonClassName}
                onClick={() => onSelectOption(option.id)}
                disabled={isAnswered}
              >
                <img
                  src={option.image_url}
                  alt={option.text}
                  className="quiz-image-option-image"
                />
              </button>

              <div className="quiz-image-icon-container">{icon}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ImageOptions
