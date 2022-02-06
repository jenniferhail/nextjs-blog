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

{
  /* <header className={styles.header}>
{home ? (
  <>
    <Image
      priority
      src="/images/profile.jpg"
      className={utilStyles.borderCircle}
      height={144}
      width={144}
      alt={name}
    />
    <h1 className={utilStyles.heading2Xl}>{name}</h1>
  </>
) : (
  <>
    <Link href="/">
      <a>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt={name}
        />
      </a>
    </Link>
    <h2 className={utilStyles.headingLg}>
      <Link href="/">
        <a className={utilStyles.colorInherit}>{name}</a>
      </Link>
    </h2>
  </>
)}
</header> */
}
