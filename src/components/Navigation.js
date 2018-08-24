import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Link, navigator } from '@/router'
import store from '@/store.js'
import './Navigation.css'

const LogoutButton = (props) => {
  return (
    <React.Fragment>
      <Link to="/chat">Chat</Link>
      <div className="Navigation-login-status">
        { store.isLoggedIn ? `( ${store.username} )` : '' }
        <a
          href="/logout"
          className="Navigation-logout"
          onClick={ (event) => {
            event.preventDefault()
            navigator.push('/login')
            store.isLoggedIn = false
          } }>Logout</a>
      </div>
    </React.Fragment>
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
      </nav>
    )
  }
}

export default Navigation
