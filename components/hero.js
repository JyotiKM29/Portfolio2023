

import incrementVisitorsCount from '../pages/api/counter';
import styles from '../styles/Pages/hero.module.scss'
import Link from 'next/link';



function Hero() {
  return (
    <>
    
     <div className={styles.sections}>
  <div className={styles.hero}>
    <h1 className={styles.hero__sup}>Hi, my name is</h1>
    <h2 className={styles.hero__heading1}>Jyoti Kumari.</h2>
    <h3 className={styles.hero__heading2}>I build reliable software, from API to UI.</h3>

    <p className={styles.hero__sub}>
      I&apos;m a <span style={{ color: "#7cf1e2" }}>Software Engineer</span> working across the stack, with a
      lean toward <span style={{ color: "#7cf1e2" }}>backend</span>: REST APIs and services in{" "}
      <span style={{ color: "#7cf1e2" }}>Python (FastAPI)</span> and{" "}
      <span style={{ color: "#7cf1e2" }}>SQL</span>, deployed with Docker on AWS, and fast front ends in{" "}
      <span style={{ color: "#7cf1e2" }}>React</span> and{" "}
      <span style={{ color: "#7cf1e2" }}>Next.js</span>. I care about systems that stay reliable in production.
    </p>

    <Link href="https://jyoti-km.vercel.app/">
      <button className={styles.btn}>
        Check out my work{" "}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </Link>
  </div>
</div>
      
    </>
  );
}

export default Hero;
