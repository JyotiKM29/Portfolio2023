
import styles from '../styles/Pages/hero.module.scss'
import Link from 'next/link';



function Hero() {
  return (
    <>
      <div className={styles.sections} >
     
      <div className={styles.hero}>
        <h1 className={styles.hero__sup}>Hi, my name is</h1>
        <h2 className={styles.hero__heading1}>Jyoti Kumari.</h2>
        <h3 className={styles.hero__heading2}>I build things for the web.</h3>
        <p className={styles.hero__sub}>
          I’m a software engineer , I m Specialise in <span style={{color:"#7cf1e2"}}>Fronted web developer. </span> My
          expertise in <span style={{color:"#7cf1e2"}}>Figma , HTML, CSS, JS, React, Next.js </span> and MongoDB, can
          help you create a stunning and functional website that will make your
          brand stand out and attract your target audience.
        </p>
        <Link href="https://jyoti-km.vercel.app/">
        <button  className={styles.btn}>Check out my portfolio</button>
        </Link>
      </div>
    
      </div>
      
    </>
  );
}

export default Hero;
