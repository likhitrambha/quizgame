import OptionList from './OptionList'
import ImageOptionList from './ImageOptionList'
import SingleSelectList from './SingleSelectList'

import './index.css'

const QuestionReport = props => {
  const {question} = props

  const renderOptions = () => {
    switch (question.options_type) {
      case 'DEFAULT':
        return <OptionList options={question.options} />

      case 'IMAGE':
        return <ImageOptionList options={question.options} />

      case 'SINGLE_SELECT':
        return <SingleSelectList options={question.options} />

      default:
        return null
    }
  }

  return (
    <div className="question-report-card">
      <h2 className="question-heading">{question.question_text}</h2>

      <div className="question-options-container">
        <ul>
          <li>{renderOptions()}</li>
        </ul>
      </div>
    </div>
  )
}

export default QuestionReport
