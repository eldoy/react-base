import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Get chatting</h1>
        <p>This is the perfect chat app. <Link to="/login">Log in</Link> to get started!</p>
      </div>
    )
  }
}

export default Home
