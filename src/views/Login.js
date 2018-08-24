import React, { Component } from 'react'
import { store, observer, observable, computed } from '@/store.js'
import navigator from '@/router/navigator.js'
import './Login.css'

@observer class Login extends Component {

  @observable count = 0
  @observable reverse = ''

  constructor (props) {
    super(props)
    this.input = React.createRef()
  }

  @computed get comp () {
    return this.count / Math.PI
  }

  @computed get disabled () {
    return store.username.length < 1
  }

  handleChange = (event) => {
    const val = event.target.value
    store.username = val
    this.reverse = val.split('').reverse().join('')
    if (val.length === 0) {
      this.count = 0
    } else {
      this.count = Math.random()
    }
  }

  handleLogin = (event) => {
    const input = this.input.current
    if (store.username.length < 1) {
      return input.focus()
    }
    input.value = ''
    store.isLoggedIn = true
    navigator.push('/chat')
  }

  render () {
    return (
      <div className="Login">
        <h1>Log in to chat</h1>
        <p>Fill out your username and click on Start!</p>
        <p>
          <input type="text" placeholder="Username" onChange={ this.handleChange } ref={ this.input }/>
        </p>

        <ul className="Login-input">
          <li>{ this.count || '.' }</li>
          <li>{ this.comp || '.' }</li>
          <li>{ store.username || '...' } | { this.reverse || '...' }</li>
        </ul>
        <p>
          <button className={ this.disabled ? 'button-disabled' : ''} onClick={ this.handleLogin }>Start</button>
        </p>
      </div>
    )
  }
}

export default Login
