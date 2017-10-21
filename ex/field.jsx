import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Field extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.initialValue,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <label htmlFor="inputChange">{value}</label><br />
        <input id="inputChange" value={value} onChange={this.handleChange} />
      </div>
    )
  }
}

Field.propTypes = {
  initialValue: PropTypes.string,
}

Field.defaultProps = {
  initialValue: '',
}

export default Field
