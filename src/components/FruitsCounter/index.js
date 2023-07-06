// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  eatMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="bg-container">
        <div className="bg-in-container">
          <h1 className="m-heading">
            Bob ate <span className="heading">{count1}</span> mangoes
            <span className="heading"> {count2}</span> bananas
          </h1>
          <div className="cards-container">
            <div className="card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />

              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />

              <button className="button" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
