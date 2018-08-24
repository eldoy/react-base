class Navigator {
  push = (to) => {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new Event('pushstate'))
    setTimeout(() => {
      document.body.querySelectorAll('.router-link').forEach((link) => {
        link.classList[ link.pathname === to ? 'add' : 'remove' ]('active')
      })
    })
  }
}

export default new Navigator()
