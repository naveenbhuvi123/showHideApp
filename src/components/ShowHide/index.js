import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onClickFirst = () => {
    this.setState(PrevState => ({isFirst: !PrevState.isFirst}))
  }

  onClickLast = () => {
    this.setState(PrevState => ({isLast: !PrevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="show-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirst}
            >
              Show/Hide Firstname
            </button>
            {isFirst && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button type="button" className="button" onClick={this.onClickLast}>
              Show/Hide Lastname
            </button>
            {isLast && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
