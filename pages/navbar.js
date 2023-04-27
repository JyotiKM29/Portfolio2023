import Link from "next/link";
import Image  from "next/image";
import { useEffect } from "react";
import { useRouter } from 'next/router';

// import styles from "@/styles/component/navbar.module.scss";
import styles from "../styles/Component/navbar.module.scss";


function Navbar() {
  const router = useRouter();
  const downloadResume = () => {
    router.push('/Jyoti KM.pdf');
  };

  useEffect(() => {
    const menuIcon = document.querySelector(`.${styles['menu-icon']}`);
    const menuIconLines = document.querySelectorAll(`.${styles['menu-icon']} div`);
    
    function toggleActiveClass() {
      menuIcon.classList.toggle(styles.active);
      menuIconLines.forEach((div) => {
        div.classList.remove(styles['no-animation']);
      });
    }

    menuIcon.addEventListener('click', toggleActiveClass);

    return () => {
      menuIcon.removeEventListener('click', toggleActiveClass);
    };
  }, []);
 
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
      {/* <div className={styles.menu}>
            <div className={styles.frame}>
              Menu
              <div className={styles.center}>
                <div
                  className={styles['menu-icon']}
                  onClick={() => {
                    document.querySelector(`.${styles['menu-icon']}`).classList.toggle(styles.active);
                    document.querySelectorAll(`.${styles['menu-icon']} div`).forEach((div) => {
                      div.classList.remove(styles['no-animation']);
                    });
                  }}
                >
                  <div className={`${styles['line-1']} ${styles['no-animation']}`}></div>
                  <div className={`${styles['line-2']} ${styles['no-animation']}`}></div>
                  <div className={`${styles['line-3']} ${styles['no-animation']}`}></div>
                </div>
              </div>
            </div>
          </div> */}

          <div className={styles.menu}>
          <div className={styles.frame}>
            
            <div className={styles.center}>
              <div className={styles['menu-icon']}>
                <div className={`${styles['line-1']} ${styles['no-animation']}`}></div>
                <div className={`${styles['line-2']} ${styles['no-animation']}`}></div>
                <div className={`${styles['line-3']} ${styles['no-animation']}`}></div>
              </div>
            </div>
          </div>
        </div>
      <div className={styles.sidebar1}>
      <div>
        <Image alt="icon" className={styles.icon} src='/github.svg' width={'30'} height={'30'}></Image>
        </div>
        <div>
        <Image alt="icon" className={styles.icon} src='/codepen.svg' width={'30'} height={'30'}></Image>
        </div>
        <div >
        <Image alt="icon" className={styles.icon} src='/linkedin.svg' width={'20'} height={'20'}></Image>
        </div>
        <div >
        <Image alt="icon" className={styles.icon} src='/twitter.svg' width={'20'} height={'20'}></Image>
        </div>
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
