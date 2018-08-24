import React, { Component } from 'react'
import { store, observer } from '@/store.js'
import { router } from 'router-link'

@observer class Chat extends Component {
  constructor (props) {
    super(props)
    if (!store.isLoggedIn) {
      router.push('/login')
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
