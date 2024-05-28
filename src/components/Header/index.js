// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="total-container">
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="img"
      />
      <div className="internal-container">
        <Link to="/">
          <h1 className="h">Home</h1>
        </Link>
        <Link to="/products">
          <h1 className="h">Products</h1>
        </Link>
        <Link to="/cart">
          <h1 className="h">Cart</h1>
        </Link>
        <button type="button" className="h2">
          Logout
        </button>
      </div>
    </nav>
  </div>
)

export default Header
