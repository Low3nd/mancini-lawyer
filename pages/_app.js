import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';
import { useState, useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy'

const MyApp = ({ Component, pageProps }) => {

  const [spyState, setSpyState] = useState(0);
  const spyUpdate = (callback) => {
    callback();
  }

  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} spyUpdate={spyUpdate} />
      </Layout>
    </>
  )
}

export default MyApp
