import { observable, action } from 'mobx'

class Navigator {
  @observable current = window.location.pathname

  @action
  push (path) {
    this.current = path
    window.history.pushState({}, '', path)
    this.links = this.links || document.body.querySelectorAll('.router-link')
    this.links.forEach((link) => {
      link.classList[ link.pathname === path ? 'add' : 'remove' ]('active')
    })
  }
}

export default new Navigator()
