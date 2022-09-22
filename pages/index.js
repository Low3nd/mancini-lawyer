import Head from 'next/head';
import Image from 'next/image';
import clsx from 'clsx';
import styles from '../styles/index.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Maître MANCINI - Avocate à Tours</title>
      </Head>
      <section className={`${styles['skill']} ${styles['sections']}`}>
        <h2>DOMAINES D&apos;EXPERTISE</h2>
        <hr />
        <div className={styles['skill__item-container']}>
          {/* <div className={styles['skill__item']}>
            <h4>Droit de la famille</h4>
            <div className={styles['skill__icon']}>
              <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
            </div>
          </div>
          <div className={styles['skill__item']}>
            <h4>Droit de la famille</h4>
            <div className={styles['skill__icon']}>
              <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
            </div>
          </div>
          <div className={styles['skill__item']}>
            <h4>Droit de la famille</h4>
            <div className={styles['skill__icon']}>
              <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
            </div>
          </div>
          <div className={styles['skill__item']}>
            <h4>Droit de la famille</h4>
            <div className={styles['skill__icon']}>
              <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
            </div>
          </div>
          <div className={styles['skill__item']}>
            <h4>Droit de la famille</h4>
            <div className={styles['skill__icon']}>
              <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
            </div>
          </div>
          <div className={styles['skill__item']}>
            <h4>Droit de la famille</h4>
            <div className={styles['skill__icon']}>
              <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
            </div>
          </div> */}
        </div>
      </section>
      <section className={styles['sectionsb']}></section>
    </>
  )
};

export default Home;
