import Cards from "@/components/cards";
import styles from "../styles/pages/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeleft}>
          <div className={styles.homeleft__heading}>
            Supercharge your workforce with WhatApp learning.
          </div>
          <p className={styles.homeleft__subheading}>
            Unlock their true potential with AI driven vernacular content and
            whatsapp learning.
          </p>
          <button className={styles.homeleft__button}>Start Now</button>
        </div>
        <div className={styles.home_right}>
          <h1>Image Gif</h1>
        </div>
      </div>
      <div className={styles.itWork}>
        <h2>Yes, It Works!</h2>
      </div>

      <div className={styles.card}>
        <Cards />
      </div>
      
    </>
  );
};

export default Home;
