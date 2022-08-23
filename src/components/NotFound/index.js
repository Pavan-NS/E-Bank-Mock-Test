import './index.css'

const NotFound = () => (
  <>
    <div className="container">
      <img
        className="not-found"
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <h1 className="err">Page Not found</h1>
      <p className="err-des">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
