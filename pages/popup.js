import styles from '../styles/Pages/popup.module.scss';
import ContactForm from '@/components/contactForm';


function Popup() {
    return(<>
        <div className={styles.popup}>
        <div className={styles.popup__content}>
        <a href="#" className={styles.popup__close}>&times;</a>
        <h1  className={styles.popup__heading}>Contact Me !</h1>
        
        
       
          <ContactForm />

           

        </div>

        </div>
    </>);
}
export default Popup;