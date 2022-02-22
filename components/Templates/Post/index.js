import Layout from '../../Layout/_Layout'
import Head from 'next/head'
import Date from '../../Pieces/Date'
import styles from './index.module.scss'
import Image from 'next/image'

const Post = ({ postData }) => {
  const { category, title, date, contentHtml } = postData
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.blog}>
        <aside className={styles.sidebar}>
          <Image
            className={styles.profile}
            src="/images/profile.jpg"
            width={200}
            height={200}
            alt="Black and white photo of Jennifer, the blog author"
          />
          <div className={styles.welcome}>
            <h4>Hi, I&apos;m Jen!</h4>
            <p>
              Welcome to my blog — a place where I really don&apos;t know what
              I&apos;m doing yet, but I want to create and write and see what
              sticks. You&apos;ll probably find thoughts on personal style,
              money, frontend development and occasional travel, among other
              things. I want to help you find simplicity in your day-to-day and
              curate a beautiful life. Let&apos;s see how this goes!
            </p>
            <ul className={styles.social}>
              <li className={styles.icon}>
                <a
                  href="https://instagram.com/jenhail"
                  target="_blank"
                  rel="noreferrer">
                  <Image
                    src="/images/instagram.svg"
                    width={20}
                    height={20}
                    alt="Instagram icon"
                  />
                </a>
              </li>
              <li className={styles.icon}>
                <a
                  href="https://twitter.com/jennhailll"
                  target="_blank"
                  rel="noreferrer">
                  <Image
                    src="/images/twitter.svg"
                    width={20}
                    height={20}
                    alt="Twitter icon"
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className={styles.favorites}>
            <h4>Favorites</h4>
            <div className={styles.favorite}>
              <div className={styles.post}>
                <Image
                  src="/images/my-desk.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="TODO"
                />
              </div>
              <h5>My Desk Setup</h5>
            </div>
            <div className={styles.favorite}>
              <div className={styles.post}>
                <Image
                  src="/images/olive.jpg"
                  layout="fill"
                  objectFit="cover"
                  alt="TODO"
                />
              </div>
              <h5>Five Ways I Stay Balanced Working Remotely</h5>
            </div>
          </div>
          <Link href={'/'}>
            <a className={styles.button}>View All Posts</a>
          </Link> */}
        </aside>
        <article className={styles.article}>
          <div className={styles.meta}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.category}>{category}</span>
            <Date className={styles.date} dateString={date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </main>
    </Layout>
  )
}

export default Post
