import { observable } from 'mobx'

class Navigator {
  @observable current = window.location.pathname
}

export default new Navigator()
