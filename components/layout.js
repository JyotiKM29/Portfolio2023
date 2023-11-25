// import Contact from "@/pages/contact"
import styles from '../styles/Pages/home.module.scss'
import Image from 'next/image'
import Navbar from "./navbar"

function Layout({ children }) {
  
    return (
      <div>
        <header>
          {/* header content */}
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* footer content */}
        
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
        Jyotikm.dev@gmail.com
      </div>
      <div className={styles.vertical}></div>
      </div>
      
        </footer>
      </div>
    )
  }
  
  export default Layout
  