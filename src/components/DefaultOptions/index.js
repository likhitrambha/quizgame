import {BsCheckCircleFill, BsXCircleFill} from 'react-icons/bs'

import './index.css'

const DefaultOptions = props => {
  const {options, selectedOptionId, onSelectOption, isAnswered} = props

  return (
    <ul className="default-options-list">
      {options.map((option, index) => {
        const optionLetter = String.fromCharCode(65 + index)

        let buttonClassName = 'default-option-button'
        let icon = null

        if (isAnswered) {
          if (option.is_correct === 'true') {
            buttonClassName += ' default-correct-option'
            icon = (
              <BsCheckCircleFill className="default-status-icon default-correct-icon" />
            )
          } else if (selectedOptionId === option.id) {
            buttonClassName += ' default-wrong-option'
            icon = (
              <BsXCircleFill className="default-status-icon default-wrong-icon" />
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
                {optionLetter}. {option.text}
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
