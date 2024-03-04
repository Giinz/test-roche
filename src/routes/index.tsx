import BaseLayout from '@/BaseLayout/BaseLayout'
import homePageRoute from '@/HomePage/routes'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    path: '/',
    children: [homePageRoute]
  }
])

export default router
