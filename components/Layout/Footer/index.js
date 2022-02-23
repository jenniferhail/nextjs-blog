import styles from './index.module.scss'

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.endnotes}>
        <h4>Endnotes</h4>
        <p>
          Thank you for visiting! Please reach out if you want to connect, or
          feel like I&apos;m a good fit for your freelance project.
        </p>
      </nav>
      <div className={styles.contact}>
        <h4>Contact</h4>
        <p>
          <a href="mailto:hi@jenhail.com">hi@jenhail.com</a>
        </p>
      </div>
      <div className={styles.social}>
        <h4>Links</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a
              href="https://www.instagram.com/jenhail/"
              target="_blank"
              rel="noreferrer">
              Insta
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="https://twitter.com/jennhailll"
              target="_blank"
              rel="noreferrer">
              Twitter
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="https://www.pinterest.com/jennhailll/_saved/"
              target="_blank"
              rel="noreferrer">
              Pinterest
            </a>
          </li>
          <li className={styles.item}>
            <a
              href="https://github.com/jenniferhail"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
