import {createContext} from 'react'

const QuizContext = createContext({
  questions: [],
  answers: [],
  score: 0,
  setQuestions: () => {},
  setAnswers: () => {},
  setScore: () => {},
})

export default QuizContext
