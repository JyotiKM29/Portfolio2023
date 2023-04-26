// import React from 'react';
// import styles from '../styles/Pages/random.module.scss';

// const menuIcon = () => {

  
//   return (
//     <div className={styles.frame}>
//       <div className={styles.center}>
//         <div
//           className={styles['menu-icon']}
//           onClick={() => {
//             document.querySelector(`.${styles['menu-icon']}`).classList.toggle(styles.active);
//             document.querySelectorAll(`.${styles['menu-icon']} div`).forEach((div) => {
//               div.classList.remove(styles['no-animation']);
//             });
//           }}
//         >
//           <div className={`${styles['line-1']} ${styles['no-animation']}`}></div>
//           <div className={`${styles['line-2']} ${styles['no-animation']}`}></div>
//           <div className={`${styles['line-3']} ${styles['no-animation']}`}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default menuIcon;

import { useEffect } from "react";
import styles from "@/styles/component/navbar.module.scss";

function Navbar() {
  useEffect(() => {
    const menuIcon = document.querySelector(`.${styles['menu-icon']}`);
    const menuIconLines = document.querySelectorAll(`.${styles['menu-icon']} div`);
    
    function toggleActiveClass() {
      menuIcon.classList.toggle(styles.active);
      menuIconLines.forEach((div) => {
        div.classList.remove(styles['no-animation']);
      });
    }

    menuIcon.addEventListener('click', toggleActiveClass);

    return () => {
      menuIcon.removeEventListener('click', toggleActiveClass);
    };
  }, []);

  return (
    <>
      <div className={styles.nav}>
        {/* ... */}
        <div className={styles.menu}>
          <div className={styles.frame}>
            Menu
            <div className={styles.center}>
              <div className={styles['menu-icon']}>
                <div className={`${styles['line-1']} ${styles['no-animation']}`}></div>
                <div className={`${styles['line-2']} ${styles['no-animation']}`}></div>
                <div className={`${styles['line-3']} ${styles['no-animation']}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... */}
    </>
  );
}

export default Navbar;
