import styles from "../styles/Pages/about.module.scss";
import Image from "next/image";

function About() {
  return (
    <>
      <div className={styles.about}>
        {/* tittle */}
        <div className={styles.title}>
          <span className={styles.title__count}>01.</span>
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
              2014 when I decided to try animate custom heading on webpage turns
              out take computer Science subject in school to Software
              Engineering Branch in my b.tech Degree.
            </p>

            <p className={styles.p}>
              I can help you create a website that not only looks great but also
              drives traffic and boosts conversions. Let me put my skills to
              work and help you take your brand to the next level with a
              visually stunning and user-friendly website.
            </p>

            <p className={styles.p}>
              I recently build Town of Book website from scratch UI design to
              code design to add functionality to store data to authetication.
            </p>

            <p className={styles.p}>
              Here are a few technologies I’ve been working with recently:
            </p>

            <div className={styles.cols}>
              <div className={styles.cols__1}>
                <div><Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>Html5</span></div>
                <div><Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>CSS3</span></div>
                <div><Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>Sass</span></div>
              </div>
              <div className={styles.cols__2}>
              <div><Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>JavaScript</span></div>
                <div><Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>React</span></div>
                <div><Image className={styles.arrow} src="/arrow.svg" width={"15"} height={"15"}></Image>
                <span>Next.js</span></div>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className={styles.content__photo}>
          
            <Image className={styles.img} src="/jyotipic.png" width={"250"} height={"250"}></Image>
            <div className={styles.imgdiv}></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
