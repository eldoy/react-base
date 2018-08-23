import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from '@/components/Navigation.js'
import Home from '@/views/Home.js'
import About from '@/views/About.js'
import Login from '@/views/Login.js'
import Chat from '@/views/Chat.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation/>
          </header>
          <main className="App-main">
            <Route exact path="/" component={ Home }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/chat" component={ Chat }/>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
