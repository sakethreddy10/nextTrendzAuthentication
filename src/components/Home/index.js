// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="total-container">
      <div className="container1">
        <h1 className="h">Clothes That Get YOU Noticed</h1>
        <p className="p">
          Fashion is part of daily air and it does not help that it changes all
          the time clothes have always been in a marker of an era and we are in
          a revolution. fashion is part of daily and it does not help that it
          changes all the time clothes have always been in a marker of an era
          and we are in a revolution.
        </p>
        <button className="b" type="button">
          Shop Now
        </button>
      </div>
      <div className="container2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="img"
        />
      </div>
    </div>
  </>
)

export default Home
