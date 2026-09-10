import OptionList from './OptionList'
import ImageOptionList from './ImageOptionList'
import SingleSelectList from './SingleSelectList'

import './index.css'

const QuestionReport = props => {
  const {question} = props

  const renderOptions = () => {
    switch (question.options_type) {
      case 'DEFAULT':
        return <OptionList question={question} />

      case 'IMAGE':
        return <ImageOptionList question={question} />

      case 'SINGLE_SELECT':
        return <SingleSelectList question={question} />

      default:
        return null
    }
  }

  return (
    <div className="question-report-card">
      <h2 className="question-heading">{question.question_text}</h2>

      <div className="question-options-container">{renderOptions()}</div>
    </div>
  )
}

export default QuestionReport
