import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Link from '@/router/Link'
import store from '@/store.js'
import './Navigation.css'

const LogoutButton = (props) => {
  return (
    <a href="/logout" onClick={ (event) => {
      event.preventDefault()
      store.isLoggedIn = false
    } }>Logout</a>
  )
}

@observer class Navigation extends Component {
  render() {
    let button
    if (store.isLoggedIn) {
      button = <LogoutButton/>
    } else {
      button = <Link to="/login">Login</Link>
    }

    return (
      <nav className="Navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        { button }
        { store.isLoggedIn ? `( ${store.username} )` : '' }
      </nav>
    )
  }
}

export default Navigation
