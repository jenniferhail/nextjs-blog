import Link from 'next/link'
import styles from './index.module.scss'

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/#work">
            <a>Work</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#notes">
            <a>Notes</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
