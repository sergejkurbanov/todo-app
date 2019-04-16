import SignUp from 'pages/SignUp'
import LogIn from 'pages/LogIn'
import Todos from 'pages/Todos'

const routes = [
  {
    path: '/',
    component: Todos,
    exact: true,
    pvt: false,
  },
  {
    path: '/sign-up',
    component: SignUp,
  },
  {
    path: '/log-in',
    component: LogIn,
  },
]

export default routes
