import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ContactForm from '../components/contactForm'
import styles from '../styles/pages/contact.module.css'
import section from '../data/section.JSON'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'


const Contact = (emailCypher) => {
    const slugId = []
    const sluggifyId = section.name.map((id) => {
        slugId.push(id.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    })
    

    return (
        <>
            <Navbar sectionName={section.name} currentSection={5} slugId={slugId} />
            <section className={styles['c-contact']}>
                <ContactForm />
                <div className={styles['c-contact__contact-info']}>
                    <div className={`${styles['c-contact__contact-adress']} ${styles['c-contact__container']}`}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>31 rue George Sand<br />37300 Tours</p>
                    </div>
                    <div className={`${styles['c-contact__contact-phone']} ${styles['c-contact__container']}`}>
                        <FontAwesomeIcon icon={faPhone} />
                        <Link href={'tel:+33616884541'}>06.16.88.45.41</Link>
                    </div>
                    <div className={`${styles['c-contact__contact-email']} ${styles['c-contact__container']}`}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Link href='mailTo:contact@mancini-avocat.fr'>contact@mancini-avocat.fr</Link>
                    </div>
                    <div className={`${styles['c-contact__contact-schedule']} ${styles['c-contact__container']}`}>
                        <FontAwesomeIcon icon={faClock} />
                        <div className={styles['c-contact__contact-schedule-text']}>
                            <p>Du lundi au vendredi</p>
                            <p>9h - 12h</p>
                            <p>14h - 18h</p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <div className={styles['c-contact__map']}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12483.416973010995!2d0.6781618347239642!3d47.38826406648961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd5c82ae43695%3A0x401e355cc2783894!2s31%20Rue%20George%20Sand%2C%2037000%20Tours!5e0!3m2!1sfr!2sfr!4v1668692300950!5m2!1sfr!2sfr" frameBorder="0" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer sectionName={section.name} slugId={slugId} loading='lazy' />
        </>
    )
}

export default Contact;