import React, { Component } from 'react'
import navigator from './navigator.js'

class Link extends Component {
  handleClick = (event) => {
    event.preventDefault()
    navigator.push(this.props.to)
  }

  render () {
    const classNames = ['router-link']
    if (window.location.pathname === this.props.to) {
      classNames.push('active')
    }
    return (
      <a className={ classNames.join(' ') } href={ this.props.to } onClick={ this.handleClick }>{ this.props.children }</a>
    )
  }
}

export default Link
