import {useState} from 'react'
import {Router, Switch, Route} from 'react-router-dom'

import QuizContext from './Context/QuizContext'
import history from './history'
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
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)

  const contextValue = {
    questions,
    setQuestions,
    answers,
    setAnswers,
    score,
    setScore,
  }

  return (
    <QuizContext.Provider value={contextValue}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />

          <ProtectedRoute exact path="/" component={Home} />

          <ProtectedRoute exact path="/quiz-game" component={QuizGame} />

          <ProtectedRoute exact path="/game-results" component={GameResults} />

          <ProtectedRoute exact path="/game-report" component={GameReport} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </QuizContext.Provider>
  )
}

export default App
