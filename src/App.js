import React, { Component } from 'react'
import Navigation from '@/components/Navigation.js'
import Router from '@/router/Router.js'
import routes from './routes.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
        <main className="App-main">
          <Router routes={ routes }/>
        </main>
      </div>
    )
  }
}

export default App
