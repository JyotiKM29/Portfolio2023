import styles from "../styles/Pages/about.module.scss";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <>
      <div className={styles.about}>
        {/* tittle */}
        <div className={styles.title}>
          <span className={styles.title__count}>02.</span>
          <h2 className={styles.title__name}>About Me</h2>
          <div className={styles.title__line}>
          <hr style={{ borderWidth: '.1px', borderColor: '#8892B0' }} />

          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* detail */}
          <div className={styles.content__detail}>
            <p className={styles.p}>
              Hello ! , My name is Jyoti KM. I enjoy creating things that live
              on the internet. My interest in web development started back in
              2017 when I decided to try animate custom heading on webpage turns
              out take computer Science subject in school to Software
              Engineering Branch in my b.tech Degree.
            </p>

            <p className={styles.p}>
              I can help you create a website that not only looks great but also
              <span style={{color:"#7cf1e2"}}>drives traffic and boosts conversions </span>. Let me put my skills to
              work and help you take your brand to the next level with a
              visually stunning and user-friendly website.
            </p>

            <p className={styles.p}>
              I recently build <Link style={{color:"#7cf1e2"}} href='https://town-of-books.vercel.app/'>Town of Book </Link> website from scratch UI design to
              code design to add functionality to store data to authetication.
            </p>

            <p className={styles.p}>
              Here are a few technologies I’ve been working with recently:
            </p>

            <div className={styles.cols}>
              <div className={styles.cols__1}>
                <div><Image alt="arow" className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>Html5</span></div>
                <div><Image alt="arow" className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>CSS3</span></div>
                <div><Image alt="arow" className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>Sass</span></div>
              </div>
              <div className={styles.cols__2}>
              <div><Image alt="arow" className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>JavaScript</span></div>
                <div><Image alt="arow" className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>React</span></div>
                <div><Image alt="arow" className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>Next.js</span></div>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className={styles.content__photo}>
           <div className={styles.container}>
           <div className={styles.tint}>
            <Image alt="arow" className={styles.img} src="/pic3.png" width={"250"} height={"250"}></Image>
          </div>
           </div>
            <div className={styles.imgdiv}></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
