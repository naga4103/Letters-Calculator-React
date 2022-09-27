// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterText = event => {
    console.log(event.target.value)
    const text = event.target.value
    const stringText = text.toString()
    const total = stringText.length
    this.setState({count: total})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="main-code-container">
          <img
            className="logo"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
          <div className="counter-container">
            <h1 className="calculate">Calculate the Letters you enter</h1>
            <label className="enter" htmlFor="text">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-box"
              onChange={this.onEnterText}
              id="text"
            />
            <div className="no-of-container">
              <p className="no-of-letters">No.of letters: {count}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
