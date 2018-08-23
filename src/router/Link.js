import React, { Component } from 'react'
import navigator from './navigator.js'

class Link extends Component {
  handleClick = (event) => {
    event.preventDefault()
    const to = this.props.to
    navigator.current = to
    window.history.pushState({}, '', to)
  }

  render () {
    return (
      <a href={ this.props.to } onClick={ this.handleClick }>{ this.props.children }</a>
    )
  }
}

export default Link
