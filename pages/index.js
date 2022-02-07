import cn from 'classnames'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/_Layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Date from '../components/Pieces/Date'
import RichText from '../components/Blocks/RichText'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <RichText position="right">
        <h2>About Me</h2>
        <h3>Web Developer + Designer</h3>
        <p>
          Hey, my name is Jennifer, but you can call me Jen. I&apos;m a web
          developer and graphic designer, currently wrangling code at{' '}
          <a
            href="https://www.useallfive.com/"
            target="_blank"
            rel="noreferrer">
            Use All Five
          </a>
          . I&apos;m a big fan of matcha lattes and I&apos;m inspired by
          minimalism in architecture, interior design, and photography.
        </p>
      </RichText>
      <RichText position="right">
        <p>
          🔭 I’m currently working on cool projects at Use All Five
          <br />
          🌱 I’m learning Three.js & WebGL
          <br />
          💬 Ask me about my coffee & matcha latte setup. 🍵 🖤 ☕️
          <br />
          📫 Get in touch: hello@jenniferhail.com
          <br />⚡ Fun fact: I&apos;m from Kentucky, so bourbon &gt; whiskey. 🥃
        </p>
      </RichText>
      <section className={cn(utilStyles.headingMd, utilStyles.padding1px)}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
