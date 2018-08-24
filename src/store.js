import { observable } from 'mobx'

class Store {
  @observable username = ''
  @observable isLoggedIn = false
  @observable messages = []
}

// Exports
export const store = new Store()
export default store
export { observable, computed, action } from 'mobx'
export { observer } from 'mobx-react'
