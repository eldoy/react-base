import { observable } from 'mobx'

// Object technique
// const store = observable({
//   username: ''
// })

// store.setUsername = function (val) {
//   this.username = val
// }


// Class technique
class Store {
  @observable username = 'vidar'
  @observable isLoggedIn = true
  @observable messages = []
}

export default new Store()
