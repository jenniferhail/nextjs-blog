import Link from 'next/link'
import Nav from '../Nav'
import styles from './index.module.scss'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Nav />
      <Link href="/">
        <a className={styles.logo}>Jen Hail</a>
      </Link>
    </header>
  )
}

export default Header
