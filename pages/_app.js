import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import section from '../data/section.JSON'
import styles from '../styles/globals.css'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
const { library } = require('@fortawesome/fontawesome-svg-core')
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const MyApp = ({ Component, pageProps }) => {

  // Cookie consent popup. Enable it with CookiePopup component (in the layout) to activate the consent form
  // const [cookieConsent, setCookieConsent] = useState('test');
  // useCallback(() => {
  //   setCookieConsent(localStorage.getItem('cookieConsent'))
  // }, [setCookieConsent]);
  // useEffect(() => (
  //   setCookieConsent(localStorage.getItem('cookieConsent'))
  // ), [cookieConsent]);
  // console.log(cookieConsent);

  const slugId = []
  const sluggifyId = section.name.map((id) => {
      slugId.push(id.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
  })
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles['content-wrapper']}>
        {/* <Layout cookieConsent={cookieConsent} setCookieConsent={setCookieConsent}> */}
        <Layout>
          <Component {...pageProps} sectionName={section.name} slugId={slugId} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp;