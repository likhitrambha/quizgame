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
      <h3>{question.question_text}</h3>
      <ul className="options-container">{renderOptions()}</ul>
    </div>
  )
}

export default QuestionReport
