import { observable } from 'mobx'

class Store {
  @observable username = ''
  @observable isLoggedIn = false
  @observable messages = []
}

export default new Store()
