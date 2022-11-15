import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from '../styles/contact.module.css';
import section from '../data/section.JSON';
import useScrollSpy from 'react-use-scrollspy';

const Contact = () => {
    const slugId = []
    const sluggifyId = section.name.map((id) => {
        slugId.push(id.replace(/ /g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    })
    
    return (
        <>
            <Navbar sectionName={section.name} currentSection={5} slugId={slugId} />
            <section className={styles['c-contact']}>
                <form>
                    <input name='name' type='text' placeholder='Nom'></input>
                    <input name='name' type='text' placeholder='Prénom'></input>
                    <input name='name' type='text' placeholder='Votre message'></input>
                </form>
            </section>
            <Footer sectionName={section.name} />
        </>
    )
}

export default Contact;