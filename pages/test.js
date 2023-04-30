import styles from "../styles/Component/nav.module.scss";


function Test() {
    return (
      <>
      <div className={styles.navbar}>
      <label className={styles.hamburgerMenu}>
           <input type="checkbox" className={styles.input} />
      </label>
      <aside className={styles.sidebar}>
      <nav>
        <div>Home </div>
        <div>about </div>
        <div>Project</div>
        <div>Contact</div>
        <div>Resume</div>
      </nav>

      </aside>
      
      </div>
      </>
    );
}
export default Test