import {useState} from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import QuizContext from './Context/QuizContext'
import Login from './components/Login'
import Home from './components/Home'
import QuizGame from './components/QuizGame'
import GameResults from './components/GameResults'
import GameReport from './components/GameReport'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  const contextValue = {
    questions,
    setQuestions,
    totalQuestions,
    setTotalQuestions,
    answers,
    setAnswers,
    score,
    setScore,
  }

  return (
    <QuizContext.Provider value={contextValue}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => {
              const jwtToken = Cookies.get('jwt_token')

              return jwtToken !== undefined ? <Redirect to="/" /> : <Login />
            }}
          />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute exact path="/quiz-game" component={QuizGame} />

          <ProtectedRoute exact path="/game-results" component={GameResults} />

          <ProtectedRoute exact path="/game-report" component={GameReport} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </QuizContext.Provider>
  )
}

export default App
