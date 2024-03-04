import { RouteObject } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const homePageRoute: RouteObject = {
  path: 'home',
  element: <HomePage />,
  index: true
}

export default homePageRoute
