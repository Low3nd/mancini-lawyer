import { useForm, ValidationError } from '@formspree/react'
import styles from '../styles/components/contactForm.module.css'

const ContactForm = () => {

    const [state, handleSubmit] = useForm('xvoeapzb')

    if (state.succeeded) {
        return <p className={styles['c-contact__form-validation-message']}>Merci, votre message a bien été envoyé !<br />Nous vous recontacterons dès que possible.</p>
    }

    return (
        <form className={styles['c-contact__form']} onSubmit={handleSubmit}>
            <h2>FORMULAIRE DE CONTACT</h2>
            <div className={`${styles['c-contact__form-name']} ${styles['c-contact__input-container']}`}>
                <label htmlFor='Nom'>
                    Nom
                </label>
                <input
                    id='Nom'
                    name='Nom'
                    type='text'
                    placeholder='' 
                />
            </div>
            <div className={`${styles['c-contact__form-surname']} ${styles['c-contact__input-container']}`}>
                <label htmlFor='Prenom'>
                    Prénom
                </label>
                <input
                    id='Prenom'
                    name='Prenom'
                    type='text'
                    placeholder=''
                />
            </div>
            <div className={`${styles['c-contact__form-email']} ${styles['c-contact__input-container']}`}>
                <label htmlFor='Email'>
                    Email
                </label>
                <input
                    id='Email'
                    name='Email'
                    type='email'
                    placeholder=''
                />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
            </div>
            <div className={`${styles['c-contact__form-phone']} ${styles['c-contact__input-container']}`}>
                <label htmlFor='Telephone'>
                    Téléphone
                </label>
                <input
                    id='Telephone'
                    name='Telephone'
                    type='tel'
                    placeholder=''
                />
            </div>
            <div className={`${styles['c-contact__form-message']} ${styles['c-contact__input-container']}`}>
                <label htmlFor='Message'>
                    Votre Message
                </label>
                <textarea
                    id="Message"
                    name='Message'
                    type='text'
                    placeholder=''
                />
                <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                />
            </div>
        <button className={styles['c-contact__form-submit']} type='submit'>Envoyez votre message</button>
        </form>
    )
}

export default ContactForm