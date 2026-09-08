import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    errorMsg: '',
  }

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      if (history.location.pathname === '/login') {
        history.replace('/')
      }
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showError: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state

    return (
      <div className="login-container">
        <div className="login-card">
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1785311950/Frame_8787_qta4a8.png"
              alt="login website logo"
              className="login-logo"
            />

            <div className="input-container">
              <label htmlFor="username" className="input-label">
                USERNAME
              </label>

              <input
                id="username"
                type="text"
                className="input-field"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>

              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>

            <div className="show-password-container">
              <input
                id="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={this.onChangeShowPassword}
              />

              <label htmlFor="showPassword" className="show-password-label">
                Show Password
              </label>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            {showError && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
