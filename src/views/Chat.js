import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from '@/store.js'

@observer class Chat extends Component {

  constructor (props) {
    super(props)
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
      <div class="Chat">
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
