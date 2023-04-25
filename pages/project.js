import styles from '../styles/Pages/project.module.scss';
import Image from "next/image";

function Project(){
    return(
        <>
         <div className={styles.project}>
         <div className={styles.title}>
         <span className={styles.title__count}>03.</span>
          <h2 className={styles.title__name}>Some Things I’ve Built</h2>
          <div className={styles.title__line}>
          <hr style={{ borderWidth: '.1px', borderColor: '#8892B0' }} />
          </div>
         </div>

         <section className={styles.project__1}>
         <div className={styles.project__1__photo}>
            <Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
         </div>
         <div className={styles.project__1__content}>
             <h2>The FitClub</h2>
             <div>
                <p>It is gym website which used by gym user to get
 Information about gym , they can login and Sign in.
they can check their program , plans and other Info.</p>
             </div>
             <h3>React Firebase CSS</h3>
             <div>
                <div>  <Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image></div>
                <div>   <Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image></div>
             </div>
         </div>

         </section>
         <section className={styles.project__2}>
            
         </section>
         <section className={styles.project__3}>
            
         </section>

         

         </div>
        </>
    );
}
export default Project;