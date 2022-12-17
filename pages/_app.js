import Head from 'next/head'
import Layout from '../components/layout'
import section from '../data/section.JSON'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


const MyApp = ({ Component, pageProps }) => {
  library.add(fas)
  console.log('Rerender')
  const slugId = []
  const sluggifyId = section.name.map((id) => {
      slugId.push(id.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
  })
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} sectionName={section.name} slugId={slugId} />
      </Layout>
    </>
  )
}

export default MyApp
