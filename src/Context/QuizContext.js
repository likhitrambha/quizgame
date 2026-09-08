import {createContext} from 'react'

const QuizContext = createContext({
  questions: [],
  totalQuestions: 0,
  answers: [],
  score: 0,
  setQuestions: () => {},
  setTotalQuestions: () => {},
  setAnswers: () => {},
  setScore: () => {},
})

export default QuizContext
