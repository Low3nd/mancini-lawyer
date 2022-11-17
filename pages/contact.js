import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from '../styles/contact.module.css';
import section from '../data/section.JSON';
import useScrollSpy from 'react-use-scrollspy';
import Image from 'next/image';
import placeHolder from '../public/img/intersection.jpg';

const Contact = () => {
    const slugId = []
    const sluggifyId = section.name.map((id) => {
        slugId.push(id.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    })
    
    return (
        <>
            <Navbar sectionName={section.name} currentSection={5} slugId={slugId} />
            <section className={styles['c-contact']}>
                <div className={styles['c-contact__contact-info']}>
                    <h2>LEA MANCINI</h2>
                    <div className={styles['c-contact__contact-adress']}>

                    </div>
                    <div className={styles['c-contact__contact-phone']}>

                    </div>
                    <div className={styles['c-contact__contact-mail']}>

                    </div>
                    
                </div>
                <form className={styles['c-contact__form']}>
                    <h2>FORMULAIRE DE CONTACT</h2>
                    <div className={`${styles['c-contact__form-name']} ${styles['c-contact__input-container']}`}>
                        <label for='name'>Nom</label>
                        <input name='name' type='text' placeholder=''></input>
                    </div>
                    <div className={`${styles['c-contact__form-surname']} ${styles['c-contact__input-container']}`}>
                        <label for='surname'>Prénom</label>
                        <input name='surname' type='text' placeholder=''></input>
                    </div>
                    <div className={`${styles['c-contact__form-email']} ${styles['c-contact__input-container']}`}>
                        <label for='email'>Email</label>
                        <input name='email' type='email' placeholder=''></input>
                    </div>
                    <div className={`${styles['c-contact__form-phone']} ${styles['c-contact__input-container']}`}>
                        <label for='phone'>Téléphone</label>
                        <input name='phone' type='tel' placeholder=''></input>
                    </div>
                    <div className={`${styles['c-contact__form-message']} ${styles['c-contact__input-container']}`}>
                        <label for='message'>Votre Message</label>
                        <textarea name='message' type='text' placeholder=''></textarea>
                    </div>
                <button className={styles['c-contact__submit']} type='submit'>Envoyez votre message</button>
                </form>
            </section>
            <div className={styles['c-contact__map']}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12483.416973010995!2d0.6781618347239642!3d47.38826406648961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcd5c82ae43695%3A0x401e355cc2783894!2s31%20Rue%20George%20Sand%2C%2037000%20Tours!5e0!3m2!1sfr!2sfr!4v1668692300950!5m2!1sfr!2sfr" frameborder="0" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer sectionName={section.name} loading='lazy' />
        </>
    )
}

export default Contact;