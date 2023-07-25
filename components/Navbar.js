import styles from '../styles/component/navbar.module.scss';

import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
     <Image
            alt="icon"
            className={styles.icon}
            src="/chaabi-logo.svg"
            width={"120"}
            height={"120"}
          ></Image>
     <button className={styles.navbar__button}>
        Download
     </button>
    </div>
  )
}

export default Navbar
