import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';
import menuIds from '../data/menu.json'

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
