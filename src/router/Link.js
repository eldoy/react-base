import React, { Component } from 'react'
import navigator from './navigator.js'

class Link extends Component {
  handleClick = (event) => {
    event.preventDefault()
    const to = this.props.to
    navigator.push(to)
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
