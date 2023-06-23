import styles from '../styles/Pages/contact.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Contact(){
    const [count, setCount] = useState(0);

    useEffect(() => {
      const fetchCount = async () => {
        try {
          const response = await fetch('/api/counter');
          if (response.ok) {
            const data = await response.json();
            setCount(data.count);
          } else {
            console.log('Error fetching visitor count:', response.status);
          }
        } catch (error) {
          console.error('Error fetching visitor count:', error);
        }
      };
  
      fetchCount();
    }, []);


    return(
        <>
        <div className={styles.contactpage}>
        <div className={styles.contact}>
        <h1 className={styles.contact__sup}>04.  What’s Next?</h1>
        <h2 className={styles.contact__heading}>Get In Touch</h2>
        <p className={styles.contact__sub}>Although I’m currently looking for any new opportunities, my inbox is always open. 
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <Link href="https://www.linkedin.com/in/jyotikmr/">
        <button className={styles.contact__btn}>Say hello</button>
        </Link>
        

        <div className={styles.copyright}>
        <p className={styles.p}>designed & built with ❤️ by Jyoti KM</p>
        <p className={styles.p}>Total vistors: {count} </p>
        <p className={styles.p}>copyright@2023</p>
        
        </div>
        </div>
 
        

        </div>
        </>
    );
}
export default Contact;