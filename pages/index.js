import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/_Layout'
import { getSortedPostsData } from '../lib/posts'
import RichText from '../components/Blocks/RichText'
import ImageGrid from '../components/Blocks/ImageGrid'
import PostList from '../components/Blocks/PostList'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ImageGrid />
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
      <PostList posts={allPostsData} />
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
