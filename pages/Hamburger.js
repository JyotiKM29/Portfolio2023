import styles from "../styles/Component/Hamburger.module.scss";

import Link from "next/link";

import { useRouter } from "next/router";

function Hamburger() {
  const router = useRouter();
  const downloadResume = () => {
    router.push("/Jyoti.pdf");
  };

  return (
    <>
      <div className={styles.navbar}>
      {/* <div className={styles.blur}></div> */}
        <label className={styles.hamburgerMenu}>
          <input type="checkbox" className={styles.input} />
        </label>
        
        <aside className={styles.sidebar}>
          <nav
            className={styles.nav}
            onclick="showMessage()"
            onmouseover="showTooltip()"
            onmouseout="hideTooltip()"
          >
            <Link href="/" className={styles.nav__link}>
              <span className={styles.span}>01.</span>Home
            </Link>

            <Link href="/about" className={styles.nav__link}>
              <span className={styles.span}>02.</span>About
            </Link>

            <Link href="/project" className={styles.nav__link}>
              <span className={styles.span}>03.</span>Project
            </Link>

            <Link href="/contact" className={styles.nav__link}>
              <span className={styles.span}>04.</span>Contact
            </Link>
            {/* button */}
            <Link href="#" className={styles.nav__link}>
              <button onClick={downloadResume} className={styles.btn}>
                Resume
              </button>
            </Link>
          </nav>
        </aside>
        
      </div>
    </>
  );
}
export default Hamburger;
