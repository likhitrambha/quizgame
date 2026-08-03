import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  const onClickLogo = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <nav className="header-container">
      <button
        type="button"
        className="logo-button"
        onClick={onClickLogo}
        aria-label="Go to home"
      >
        <img
          src="https://res.cloudinary.com/ds3qgsy6r/image/upload/v1785311950/Frame_8787_qta4a8.png"
          alt="website logo"
          className="website-logo"
        />
      </button>

      <button
        type="button"
        className="logout-button"
        onClick={onClickLogout}
        aria-label="Logout"
      >
        <span className="logout-text">Logout</span>
        <FiLogOut className="logout-icon" />
      </button>
    </nav>
  )
}

export default withRouter(Header)
