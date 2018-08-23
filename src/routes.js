import Home from '@/views/Home.js'
import About from '@/views/About.js'
import Login from '@/views/Login.js'
import Chat from '@/views/Chat.js'
import NotFound from '@/views/NotFound.js'

const routes = [
  { path: '/', view: Home },
  { path: '/about', view: About },
  { path: '/login', view: Login },
  { path: '/chat', view: Chat },
  { path: '*', view: NotFound }
]

export default routes
