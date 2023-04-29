import React from "react";
import styles from "../styles/Layout/navbar2.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NavItem from "../components/NavItem";

const MENU_LIST = [
  {
    num: "01",
    text: "About",
    href: "/",
  },
  {
    num: "02",
    text: "Project",
    href: "/project",
  },
  {
    num: "03",
    text: "Experience",
    href: "/github",
  },
  {
    num: "04",
    text: "Contact",
    href: "/contact",
  },
];

const navbar2 = () => {
  // download resume
  const router = useRouter();
  const downloadResume = () => {
    router.push("/Jyoti KM.pdf");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* <Link href="/">
          <Image alt="icon" src="/icon2.svg" width={"50"} height={"50"}></Image>
        </Link> */}

      <label className={styles.hamburger}>
        <input className={styles.input} type="checkbox" />
      </label>

      <aside className={styles.sidebar}>
        <nav className={styles.nav__menu}>
          <div>about</div>
          <div>project</div>
          <div>Experience</div>
          <div>contact</div>
          <button>Resume</button>
        </nav>
      </aside>
        
         {/* <div className={styles.nav__menulist}>
          {MENU_LIST.map((menu, idx) => {
            return (
              <div>
                <NavItem {...menu} />
              </div>
            );
          })}
          
          <Link href="#" className={styles.link}>
            <button onClick={downloadResume} className={styles.btn}>
              Resume
            </button>
          </Link>
        </div>  */}
      </nav>
    </header>
  );
};

export default navbar2;
