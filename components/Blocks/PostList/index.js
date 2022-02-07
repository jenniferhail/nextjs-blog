import Link from 'next/link'
import Date from '../../Pieces/Date'
import styles from './index.module.scss'

const PostList = ({ posts }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2>Notes &amp; Photos</h2>
        <h3>Things I&apos;ve Written</h3>
        <ul className={styles.list}>
          {posts?.map(({ id, date, title, category }) => (
            <li className={styles.item} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <span className={styles.category}>{category}</span>
              {/* <small className={styles.date}>
              <Date dateString={date} />
            </small> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PostList
