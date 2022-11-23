import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

const MyApp = ({ Component, pageProps }) => {
  console.log('Rerender')
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
