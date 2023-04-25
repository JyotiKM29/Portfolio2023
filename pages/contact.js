import styles from '../styles/Pages/contact.module.scss';

function Contact(){
    return(
        <>
        <div className={styles.contactpage}>
        <div className={styles.contact}>
        <h1 className={styles.contact__sup}>04.  What’s Next?</h1>
        <h2 className={styles.contact__heading}>Get In Touch</h2>
        <p className={styles.contact__sub}>Although I’m not currently looking for any new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <button className={styles.contact__btn}>Say hello</button>

        <div className={styles.copyright}>
        <p className={styles.p}>designed & built with ❤️ by Jyoti KM</p>
        <p className={styles.p}>copyright@2023</p>
        </div>
        </div>
 
        

        </div>
        </>
    );
}
export default Contact;