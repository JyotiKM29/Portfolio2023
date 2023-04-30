import styles from "../styles/Component/Hamburger.module.scss";

import Link from "next/link";
import Image  from "next/image";
import { useRouter } from 'next/router';

function Hamburger() {
  const router = useRouter();
  const downloadResume = () => {
    router.push('/Jyoti KM.pdf');
  };

  
    return (
      <>
      <div className={styles.navbar}>
      <label className={styles.hamburgerMenu}>
           <input type="checkbox" className={styles.input} />
      </label>
      <aside className={styles.sidebar}>
      <nav className={styles.nav}  onclick="showMessage()" onmouseover="showTooltip()" onmouseout="hideTooltip()">
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
          
      </nav>

      </aside>
      
      </div>
      </>
    );
}
export default Hamburger