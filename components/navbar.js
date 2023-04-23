import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/component/navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        {/* logo */}
        <div className={styles.nav__logo}>
          <Image src='/icon2.svg' width={'50'} height={'50'}></Image>
        </div>

        {/* links */}
        <div className={styles.nav__tab}>
          <Link href="#" className={styles.link}>
            <span className={styles.span}>01.</span>About
          </Link>
          <Link href="#" className={styles.link}>
            <span className={styles.span}>02.</span>Experience
          </Link>
          <Link href="#" className={styles.link}>
            <span className={styles.span}>03.</span>Project
          </Link>
          <Link href="#" className={styles.link}>
            <span className={styles.span}>04.</span>Contact
          </Link>
          {/* button */}
          <Link href="#">
            <button className={styles.btn}>Resume</button>
          </Link>
        </div>
      </div>
      <div className={styles.sidebar1}>
      <div>
        <Image className={styles.icon} src='/github.svg' width={'30'} height={'30'}></Image>
        </div>
        <div>
        <Image className={styles.icon} src='/codepen.svg' width={'30'} height={'30'}></Image>
        </div>
        <div >
        <Image className={styles.icon} src='/linkedin.svg' width={'20'} height={'20'}></Image>
        </div>
        <div >
        <Image className={styles.icon} src='/twitter.svg' width={'20'} height={'20'}></Image>
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
