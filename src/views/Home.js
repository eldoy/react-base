import React, { Component } from 'react'
import { Link } from 'router-link'
import { store } from '@/store.js'

const LoginLink = (props) => {
  if (store.isLoggedIn) return ''
  return (
    <React.Fragment>
      <Link to="/login">Log in</Link> to get started!
    </React.Fragment>
  )
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Get chatting</h1>
        <p>This is the perfect chat app. <LoginLink/></p>
      </div>
    )
  }
}

export default Home
