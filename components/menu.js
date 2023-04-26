import React from 'react';
import styles from '../styles/Pages/random.module.scss';

const menuIcon = () => {

  
  return (
    <div className={styles.frame}>
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
  );
};

export default menuIcon;
