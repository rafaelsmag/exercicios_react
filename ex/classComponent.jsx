import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassComponent extends Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    )
  }
}

ClassComponent.propTypes = {
  value: PropTypes.string,
}

ClassComponent.defaultProps = {
  value: '',
}

export default ClassComponent
