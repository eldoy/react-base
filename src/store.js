import { observable } from 'mobx'

class Store {
  @observable username = 'vidar'
  @observable isLoggedIn = true
  @observable messages = []
}

export default new Store()
