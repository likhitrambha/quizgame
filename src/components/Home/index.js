import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  onClickStartQuiz = () => {
    const {history} = this.props
    history.push('/quiz-game')
  }

  render() {
    return (
      <>
        <Header />

        <div className="home-container">
          <div className="home-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
              alt="start quiz game"
              className="home-image"
            />

            <h1 className="home-heading">
              How Many Of These Questions Do You Actually Know?
            </h1>

            <p className="home-description">
              Test yourself with these easy quiz questions and answers
            </p>

            <button
              type="button"
              className="start-button"
              onClick={this.onClickStartQuiz}
            >
              Start Quiz
            </button>
            <div className="warning-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/quiz-game-error-img.png"
                alt="warning icon"
                className="warning-icon"
              />
              <p className="warning-text">
                All the progress will be lost, if you reload during the quiz
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
