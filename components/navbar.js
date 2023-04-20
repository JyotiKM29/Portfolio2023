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
    </>
  );
}
export default Navbar;
