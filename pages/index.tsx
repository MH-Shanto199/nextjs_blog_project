import Head from 'next/head'
import Blog from '../src/components/landing/blog'
import Layout from '../src/components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing</title>
      </Head>
      <Layout>
        {/* Blog section */}
          <Blog/>
        {/* Blog section */}
      </Layout>
    </>
  )
}
