import {BsCheckCircleFill} from 'react-icons/bs'

import './index.css'

const SingleSelectList = props => {
  const {options} = props

  return (
    <ul className="report-single-select-list">
      {options.map(option => {
        const isCorrect = option.is_correct === 'true'

        return (
          <li key={option.id} className="report-single-option-item">
            <div className="report-single-option-wrapper">
              <label className="report-option-label">
                <input
                  type="radio"
                  disabled
                  checked={isCorrect}
                  readOnly
                  className="report-radio-input"
                />
                <span>{option.text}</span>
              </label>

              <div className="report-single-icon-container">
                {isCorrect && (
                  <BsCheckCircleFill className="report-single-correct-icon" />
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default SingleSelectList
