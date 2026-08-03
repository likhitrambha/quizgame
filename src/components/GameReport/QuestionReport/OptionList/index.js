import {BsCheckCircleFill} from 'react-icons/bs'

import './index.css'

const OptionList = props => {
  const {options} = props

  return (
    <ul className="report-options-list">
      {options.map(option => {
        const isCorrect = option.is_correct === 'true'

        return (
          <li key={option.id} className="report-option-item">
            <div className="report-option-wrapper">
              <button
                type="button"
                className={
                  isCorrect ? 'report-correct-option' : 'report-default-option'
                }
                disabled
              >
                {option.text}
              </button>

              <div className="report-icon-container">
                {isCorrect && (
                  <BsCheckCircleFill className="report-correct-icon" />
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default OptionList
