import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/index.module.css'
import Skillcard from '../components/skillcard'
import skill from '../data/skillcard.JSON'
import section from '../data/section.JSON'
import testimonies from '../data/testimonies.JSON'
import { useRef, useState } from 'react'
import useScrollSpy from 'react-use-scrollspy'
import testSymbol from '../public/icon/logo-nocircle.svg'
import bioPic from '../public/img/bio-pic3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const slugId = []
  const sluggifyId = section.name.map((id) => {
      slugId.push(id.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
  })

  const skillList = [];
  const skillcardConstructor = Object.values(skill).map(skillcard => {
    skillList.push([skillcard.title, skillcard.bullet, skillcard.description, skillcard.icon])
  })

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -81,
  })
  return (
    <>
      <Head>
        <title>Maître MANCINI - Avocate à Tours</title>
      </Head>
      <Navbar sectionName={section.name} currentSection={activeSection} slugId={slugId} />
      <section id="accueil" className={styles['c-hero']} ref={sectionRefs[0]}>
        <div className={styles['c-hero__content']}>
          <div className={styles['c-hero__logo']} ref={sectionRefs[1]}>
            <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6142 23.3858 101 51 101Z" stroke="currentcolor" strokeMiterlimit="10"/>
                <path d="M82.6999 32.1V33.2C81.4999 33.2 80.5999 33.4 79.9999 33.6C79.3999 33.8 78.9999 34.3 78.7999 34.9C78.5999 35.5 78.4999 36.5 78.4999 37.8V64.1C78.4999 65.4 78.5999 66.3 78.7999 67C78.9999 67.7 79.3999 68.1 79.9999 68.3C80.5999 68.5 81.4999 68.7 82.6999 68.7V69.8C81.8999 69.7 80.8999 69.7 79.6999 69.7C78.4999 69.7 77.2999 69.7 75.9999 69.7C74.5999 69.7 73.2999 69.7 72.0999 69.7C70.8999 69.7 69.8999 69.8 69.1999 69.8V68.7C70.3999 68.6 71.2999 68.5 71.8999 68.3C72.4999 68.1 72.8999 67.7 73.0999 67C73.2999 66.4 73.3999 65.4 73.3999 64.1V34.9L73.5999 35.1L60.5999 70H59.7999L46.4999 35.5V51.3H45.2999V37.7C45.2999 36.4 45.1999 35.4 44.9999 34.8C44.7999 34.2 44.3999 33.8 43.7999 33.5C43.1999 33.3 42.2999 33.1 41.0999 33.1V32C41.6999 32 42.4999 32.1 43.3999 32.1C44.2999 32.1 45.1999 32.2 46.0999 32.2C46.8999 32.2 47.6999 32.2 48.4999 32.1C49.2999 32.1 49.9999 32 50.5999 32L62.5999 63.7L61.6999 64.1L73.5999 32.1C73.9999 32.1 74.3999 32.1 74.7999 32.1C75.1999 32.1 75.5999 32.1 75.9999 32.1C77.1999 32.1 78.4999 32.1 79.6999 32C80.8999 32.2 81.8999 32.2 82.6999 32.1Z" fill="currentcolor"/>
                <path d="M32.6999 32.2V33.3C31.4999 33.3 30.5999 33.5 29.9999 33.7C29.3999 33.9 28.9999 34.4 28.7999 35C28.5999 35.6 28.4999 36.6 28.4999 37.9V64.2C28.4999 65.5 28.5999 66.4 28.7999 67.1C28.9999 67.8 29.3999 68.2 29.9999 68.3C30.5999 68.5 31.4999 68.6 32.6999 68.6H36.5999C38.2999 68.6 39.5999 68.4 40.6999 68.1C41.6999 67.7 42.5999 67.2 43.1999 66.4C43.7999 65.6 44.2999 64.6 44.5999 63.4C44.8999 62.1 45.1999 60.6 45.2999 58.7H46.4999C46.3999 59.8 46.2999 61.2 46.2999 63C46.2999 63.7 46.2999 64.6 46.3999 65.9C46.4999 67.2 46.5999 68.5 46.6999 69.8C44.8999 69.7 42.8999 69.7 40.5999 69.7C38.2999 69.7 36.2999 69.7 34.5999 69.7C33.7999 69.7 32.7999 69.7 31.5999 69.7C30.3999 69.7 29.0999 69.7 27.6999 69.7C26.2999 69.7 24.8999 69.7 23.3999 69.8C21.9999 69.8 20.5999 69.8 19.2999 69.9V68.8C20.4999 68.7 21.3999 68.6 21.9999 68.4C22.5999 68.2 22.9999 67.8 23.1999 67.1C23.3999 66.5 23.4999 65.5 23.4999 64.2V37.9C23.4999 36.6 23.3999 35.6 23.1999 35C22.9999 34.4 22.5999 34 21.9999 33.7C21.3999 33.5 20.4999 33.3 19.2999 33.3V32.2C19.9999 32.2 20.9999 32.3 22.1999 32.3C23.3999 32.3 24.6999 32.4 26.0999 32.4C27.2999 32.4 28.5999 32.4 29.7999 32.3C30.8999 32.3 31.8999 32.3 32.6999 32.2Z" fill="currentcolor"/>
            </svg>
          </div>
          <div className={styles['c-hero__title']}>
            <h1>LÉA MANCINI</h1>
            <hr></hr>
            <h2>Avocate au Barreau de Tours</h2>
          </div>
          <Link href='#contact'>
            <a>CONTACT</a>
          </Link>
        </div>
        <div className={styles['c-hero__scroll-arrow']}>
          <Link href='#competences'>
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.2261 16.5L20 35.2362L3.77395 16.5L36.2261 16.5Z" stroke="currentcolor"/>
              <path d="M20 26.6667L2.6795 6.66669L37.3205 6.66669L20 26.6667Z" fill="currentcolor"/>
            </svg>
          </Link>
        </div>
      </section>
      <section id='competences' className={styles['skill']}>
        <div className={styles['c-skillcard__container']}>
          {skillList.map((skill) => (
            <Skillcard key={`${skill[0]}`} title={skill[0]} bullet={skill[1]} description={skill[2]} />
          ))}
        </div>
      </section>
      <section className={styles['c-intersection']}>
          <div className={`${styles['c-intersection__label']} ${styles['c-intersection__contact']}`}>
            <span className={styles['c-intersection__contact-info']}>
              <Image 
                src={testSymbol}
                alt='A phone symbol'
                height={24}
                width={24}
              />
              <p>06.43.36.21.36</p>
            </span>
            <span className={styles['c-intersection__contact-info']}>
              <Image 
                src={testSymbol}
                alt=''
                height={24}
                width={24}
              />
              <p>contact@lea.com</p>
            </span>
          </div>
          <div className={styles['c-intersection__image']}><a className={styles['c-intersection__anchor']} ref={sectionRefs[2]}></a></div>
          <div className={`${styles['c-intersection__label']} ${styles['c-intersection__schedule']}`}>
            <p><b>Du Lundi au Vendredi</b></p>
            <p>8h - 12h</p>
            <p>14h - 19h</p>
          </div>
      </section>
      <section id="a-propos" className={styles['c-bio']}>
        <div className={styles['c-bio__content']}>
          <div className={styles['c-bio__content-img']}>
            <Image
              alt='Une photo de Maitre Lea Mancini'
              src={bioPic}
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <div className={styles['c-bio__content-title']}>
            <h3>MAÎTRE MANCINI</h3>
            <h4>Avocat au barreau de Tours et près de la Cour d’Appel d’Orléans</h4>
          </div>
          <p className={styles['c-bio__content-description']}>Originaire du Cher, région à laquelle je suis très attachée, je me suis installée à TOURS au gré de mes expériences professionnelles. Diplômée d’un Master 1 Carrières Judiciaires et Sciences Criminelles, d’un Master 2 Droit et Justice (procédures en droit privé) avec obtention de l’examen d’entrée à l’Ecole des Avocats dans le même temps, j’ai prêté serment en novembre 2013 après avoir suivi la formation de l’Ecole du Centre Ouest des Avocats. Je me suis forgée sept années d’expérience au sein de cabinets d’Avocats individuels, généralistes, j’interviens à titre personnel principalement dans le domaine du droit de la famille (divorce, séparation), ainsi qu’en droit pénal et en droit civil. Je suis fondamentalement soucieuse d’apporter écoute et rigueur à mes clients, et de mettre à leur profit l’ensemble de mes compétences, de mon énergie et de ma pugnacité. Je suis également encline à proposer le recours à la médiation ou aux modes alternatifs de règlement des conflits lorsque la situation s’y prête (hors cas obligatoires).</p>
        </div>
      </section>
      {/* <section id='testimonies' className={styles['c-testimonies']}>
        <h3 className={styles['c-testimonies__title']}>What People Say</h3>
        {testimonies.data.map((testimony) => (
          <div key={`comment${testimony.id}`} className={styles['c-testimonies__container']}>
            <p className={styles['c-testimonies__comment']}>{testimony.comment}</p>
            <div>
              <h4 className={styles['c-testimonies__name']}>{testimony.name[0].toUpperCase() + testimony.name.slice(1) + ' ' + testimony.surname[0].toUpperCase() + testimony.surname.slice(1)}</h4>
              <div className={styles['c-testimonies__pic']}>
                <Image 
                  alt='The picture of a user who left a positive comment on the work of Lea Mancini'
                  src={testimony.userPic}
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </div>
        ))}
      </section> */}
      <section id='honoraires' className={styles['c-pricing']} ref={sectionRefs[3]}>
        <div className={styles['c-pricing__card-container']}>
          <div className={`${styles['c-pricing__card']} ${styles['c-pricing__card-pen']}`}>
            <FontAwesomeIcon icon={faPen} />
            <span>CONSULTATION ÉCRITE</span>
            <span>100 euros</span>
          </div>
          <div className={`${styles['c-pricing__card']} ${styles['c-pricing__card-phone']}`}>
            <FontAwesomeIcon icon={faPhone} />
            <span>CONSULTATION TÉLÉPHONIQUE</span>
            <span>100 euros</span>
          </div>
          <div className={`${styles['c-pricing__card']} ${styles['c-pricing__card-desk']}`}>
            <FontAwesomeIcon icon={faBuilding} />
            <span>CONSULTATION CABINET</span>
            <span>100 euros</span>
          </div>
        </div>
        <p className={styles['c-pricing__description']}>La première consultation est facturée, et déduite des honoraires appliqués en cas de poursuite d’une procédure. Une convention d’honoraires est régularisée au préalable, déterminant l’honoraire fonction de la procédure, de la difficulté prévisible et des critères réglementant cette fixation.<br />En cas de couverture par une assurance protection juridique, celle-ci peut prendre en charge tout ou partie des honoraires prévus.<br />Si la situation financière et personnelle le permet, une demande d’aide juridictionnelle sera déposée (hormis en présence d’un dossier complexe, le Cabinet se réservant alors la possibilité de ne pas intervenir à l’aide juridictionnelle). Enfin, la pratique de l’honoraire de résultat en complément d’un honoraire fixe est possible dans certaines matières. Toute modification donne lieu à un avenant à la convention d’honoraires.</p>
        <button className={styles['c-pricing__contact-button']}>CONTACT</button>
      </section>
      <Footer sectionName={section.name} />
    </>
  )
};

export default Home;