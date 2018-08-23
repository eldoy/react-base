import React, { Component } from 'react'
import Link from '@/router/Link'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Get chatting</h1>
        <p>This is the perfect chat app. <Link href="/login">Log in</Link> to get started!</p>
      </div>
    )
  }
}

export default Home
