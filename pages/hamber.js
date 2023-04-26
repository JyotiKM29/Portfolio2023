import styles from '../styles/Layout/hamber.module.scss'

function Hambar(){
    return(
        <>
        
        <label className={styles.hamburger}>
      <input type="checkbox" className={styles.input} />
    </label>
    <aside className={styles.sidebar}>
      <nav>
        <div>This</div>
        <div>Is</div>
        <div>The</div>
        <div>Sidebar</div>
      </nav>
    </aside>
        
        </>
    );
}
export default Hambar;