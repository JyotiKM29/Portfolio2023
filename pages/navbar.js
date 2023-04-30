import Link from "next/link";
import Image  from "next/image";

import { useRouter } from 'next/router';

// import styles from "@/styles/component/navbar.module.scss";
import styles from "../styles/Component/navbar.module.scss";


function Navbar() {
  const router = useRouter();
  const downloadResume = () => {
    router.push('/Jyoti KM.pdf');
  };

  
    

 
  return (
    <>
      <div className={styles.nav}>
        {/* logo */}
        <div className={styles.nav__logo}>
          <Image alt="icon" src='/icon2.svg' width={'50'} height={'50'}></Image >
        </div>

        
        {/* links */}
        <div className={styles.nav__tab}  onclick="showMessage()" onmouseover="showTooltip()" onmouseout="hideTooltip()">
          <Link href="/about" className={styles.link}>
            <span className={styles.span}>01.</span>About
          </Link>
          
          <Link href="/project" className={styles.link}>
            <span className={styles.span}>02.</span>Project
            
          </Link>
          <Link href="/github" className={styles.link}>
            <span className={styles.span}>03.</span>Experience
          </Link>
          
          <Link href="/contact" className={styles.link}>
            <span className={styles.span}>04.</span>Contact
            
          </Link>
          {/* button */}
          <Link href="#" className={styles.link}>
            <button onClick={downloadResume} className={styles.btn}>Resume</button>
          </Link>
          
        </div>

       
      </div>
     

         
      <div className={styles.sidebar1}>
      <Link href="https://github.com/JyotiKM29">
        <Image alt="icon" className={styles.icon} src='/github.svg' width={'22'} height={'22'}></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/jyotikmr/">
        <Image alt="icon" className={styles.icon} src='/linkedin.svg' width={'22'} height={'22'}></Image>
        </Link>
        <Link href="https://twitter.com/jyotis_tweet">
        <Image alt="icon" className={styles.icon} src='/twitter.svg' width={'22'} height={'22'}></Image>
        </Link>
        
        <Link href="https://codepen.io/Dev213">
        <Image alt="icon" className={styles.icon} src='/codepen.svg' width={'22'} height={'22'}></Image>
        </Link>
        
        <Link href="https://www.instagram.com/jyotieee__/">
        <Image alt="icon" className={styles.icon} src='/instagram.svg' width={'22'} height={'22'}></Image>
        </Link>
        <div className={styles.vertical}></div>
      </div>
      
      <div className={styles.sidebar2}>
      <div className={styles.email}>
        Jyotikumari4442@gmail.com
      </div>
      <div className={styles.vertical}></div>
      </div>
    </>
  );
}
export default Navbar;
