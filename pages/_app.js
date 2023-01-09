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
        <Layout>
          <Component {...pageProps} sectionName={section.name} slugId={slugId} />
        </Layout>
      </div>
    </>
  )
}

export default MyApp
