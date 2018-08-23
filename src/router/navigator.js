import { observable, action } from 'mobx'

class Navigator {
  @observable current = window.location.pathname

  @action
  push (path) {
    this.current = path
    window.history.pushState({}, '', path)
    const links = document.querySelectorAll('.router-link')
    links.forEach((link) => {
      if (link.pathname === path) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
}

export default new Navigator()
