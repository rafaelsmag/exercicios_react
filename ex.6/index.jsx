import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family title="Familia">
    <Member name="Rafael" lastName="Silva" />
    <Member name="João" lastName="Silva" />
    <Member name="Maria" lastName="Silva" />
    <Member name="Ana" lastName="Silva" />
  </Family>
  , document.getElementById('app'))
