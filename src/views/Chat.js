import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '@/store.js'
import navigator from '@/router/navigator.js'

@observer class Chat extends Component {

  constructor (props) {
    super(props)
    if (!store.isLoggedIn) {
      navigator.push('/login')
    }
    this.input = React.createRef()
  }

  handleClick = () => {
    const input = this.input.current
    if (input.value.length > 0) {
      store.messages.unshift({ text: input.value })
      input.value = ''
    } else {
      input.focus()
    }
  }

  render () {
    return (
      <div className="Chat">
        <p>
          <input type="text" ref={ this.input }/>
        </p>
        <p>
          <button onClick={ this.handleClick }>Submit</button>
        </p>
        <ul>
          { store.messages.map((m) => {
            return <li key={ Math.random() }>{ m.text }</li>
          }) }
        </ul>
      </div>
    )
  }
}

export default Chat
