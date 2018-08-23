import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { computed } from 'mobx'
import navigator from './navigator.js'

@observer class Router extends Component {
  constructor (props) {
    super(props)
    this.routes = props.routes

    // Transform routes
    this.transformRoutes()
    window.onpopstate = this.dispatch
  }

  // Track the route store current
  @computed get current () {
    return navigator.current
  }

  // Transform routes to regexp matchers
  transformRoutes = () => {
    let sub = /\/:([^/]+)/ig
    for (const route of this.routes) {
      const params = []
      const regexp = route.path === '*' ? '.*' :
        route.path.replace(sub, (match, str) => {
          params.push(str)
          return '/([^/]+)'
        })
      route.regexp = new RegExp(`^${regexp}$`, 'ig')
      route.params = params
    }
  }

  dispatch = (event) => {
    event.preventDefault()
    navigator.current = window.location.pathname
  }

  // Match a route and return a view
  match = (path) => {
    for (const route of this.routes) {
      let { regexp, view, params } = route

      if (regexp.test(path)) {
        const props = {}
        regexp.lastIndex = 0

        for (const p of params) {
          let m = regexp.exec(path)
          props[p] = m[1]
        }
        regexp.lastIndex = 0

        return [ view, props ]
      }
    }
    return []
  }

  route = () => {
    const [ View, props ] = this.match(this.current)
    return <View route={ props }/>
  }

  render () {
    return <React.Fragment>{ this.route() }</React.Fragment>
  }
}

export default Router
