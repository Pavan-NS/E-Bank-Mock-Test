import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/ebank/login')
  }
  return (
    <div className="container">
      <nav className="navbar">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        />
        <button className="logout-button" type="button" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
      <div className="main-card-container">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          className="card-logo"
          alt="digital card"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        />
      </div>
    </div>
  )
}
export default Home
