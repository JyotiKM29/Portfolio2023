import styles from '../styles/Pages/popup.module.scss';
import ContactForm from '@/components/contactForm';
import Link from 'next/link';


function Popup() {
    return(<>
        <div className={styles.popup}>
        <div className={styles.popup__content}>
        <Link href="/" className={styles.popup__close}>&times;</Link>
        <h1  className={styles.popup__heading}>Contact Me !</h1>
        
        
       
          <ContactForm />

           

        </div>

        </div>
    </>);
}
export default Popup;