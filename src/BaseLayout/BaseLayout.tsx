import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

const BaseLayout: FC = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default BaseLayout
