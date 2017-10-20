import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
    }
  }

  increaseValue(valueToAdd) {
    this.setState({
      value: this.state.value += valueToAdd,
    })
  }


  render() {
    const { value } = this.state
    return (
      <div>
        <h1>{value}</h1>
        <div>
          <button onClick={() => this.increaseValue(1)}>Increase</button>
          <button onClick={() => this.increaseValue(-1)}>Decrease</button>
        </div>
      </div>
    )
  }
}

ClassComponent.propTypes = {
  value: PropTypes.number,
}

ClassComponent.defaultProps = {
  value: 0,
}

export default ClassComponent
