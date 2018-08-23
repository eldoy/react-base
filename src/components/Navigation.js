import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'
import store from '@/store.js'
import './Navigation.css'

const LogoutButton = withRouter(({ history }) => {
  return (
    <a href="javascript:void(0)" onClick={ () => {
      history.push('/')
      store.isLoggedIn = false
    } }>Logout</a>
  )
})

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
