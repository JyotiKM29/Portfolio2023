import React from 'react';
import Hero from './hero';
import About from './about';
import Github from './github';
// import Experience from './experience';
import Contact from './contact';
import Project from './project';

import styles from '../styles/Pages/home.module.scss'
import Navbar from '@/pages/navbar';
// import menuIcon from './menu2';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar} >
        <Navbar />
      </div>
      <div className={styles.home} >
        <Hero />
      </div>
      <div className={styles.about} >
        <About />
      </div>
      {/* <div className={styles.experience} >
        <menuIcon />
      </div> */}
      <div className={styles.project} >
        <Project />
      </div>
      
      <div className={styles.github} >
        <Github />
      </div>
      <div className={styles.contact} >
        <Contact />
      </div>

    </div>
  );
}

export default App;
