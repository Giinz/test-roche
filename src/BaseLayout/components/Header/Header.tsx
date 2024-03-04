import { Button } from 'antd'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../BaseLayout.module.scss'

const Header: FC = () => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  return (
    <header className={styles.header} style={{ height: isExpand ? '100vh' : '3rem' }}>
      <Button
        onClick={() => {
          setIsExpand((prev) => !prev)
        }}
      >
        Expand
      </Button>
      <Link
        to={'/'}
        onClick={() => {
          isExpand && setIsExpand(false)
        }}
      >
        ROute
      </Link>
    </header>
  )
}

export default Header
