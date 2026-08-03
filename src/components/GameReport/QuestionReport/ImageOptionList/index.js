import {BsCheckCircleFill} from 'react-icons/bs'

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
                  <BsCheckCircleFill className="report-image-correct-icon" />
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
