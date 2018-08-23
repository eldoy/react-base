import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'
import { Redirect } from 'react-router-dom'
import store from '@/store.js'
import './Login.css'

@observer class Login extends Component {

  @observable count = 0
  @observable reverse = ''
  @observable redirect = false

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

  componentDidMount () {
    store.username = ''
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
    console.log('Logging in with', store.username)
    if (store.username.length < 1) {
      return this.input.current.focus()
    }
    store.isLoggedIn = true
    this.redirect = true
  }

  render () {
    if (this.redirect) {
      return <Redirect to="/chat"/>
    }

    return (
      <div className="Login">
        <h1>Chat now</h1>
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
