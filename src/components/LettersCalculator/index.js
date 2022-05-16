import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeValue = event => {
    const {value} = event.target

    this.setState({count: value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="calculator-app">
        <div className="calculator-text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="parse" className="parse-element">
            Enter the phrase
          </label>
          <input
            id="parse"
            type="text"
            className="input-value"
            onChange={this.onChangeValue}
            value={count}
            placeholder="Enter the phrase"
          />
          <div className="letters-count-container">
            <p className="letters-count">No.of Letters: {count.length}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
