import styles from "../styles/Pages/about.module.scss";
import Image from "next/image";


function About() {
  return (
    <>
      <div className={styles.about}>
        {/* tittle */}
        <div className={styles.title}>
          <span className={styles.title__count}>02.</span>
          <h2 className={styles.title__name}>About Me</h2>
          <div className={styles.title__line}>
            <hr style={{ borderWidth: ".1px", borderColor: "#8892B0" }} />
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* detail */}
          <div className={styles.content__detail}>
            <p className={styles.p}>
              Hello! I&apos;m Jyoti KM, passionate about crafting internet-based
              creations. My journey into web development began in 2017 when I
              explored animating custom headings on webpages. This interest led
              me from studying Computer Science in school to pursuing{" "}
              <span style={{ color: "#7cf1e2" }}>Software Engineering</span> in
              my <span style={{ color: "#7cf1e2" }}>B.tech degree.</span>
            </p>

            <p className={styles.p}>
              With over <span style={{ color: "#7cf1e2" }}> 2+ years </span>of
              expertise in frontend and full-stack development, I bring the
              skills needed to create a flawless product and achieve your
              desired results seamlessly.
            </p>

            <p className={styles.p}>
              Here are a few technologies I&apos;ve been worked  recently:
            </p>

            <div className={styles.cols}>
              <div className={styles.cols__1}>
              <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>React</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Redux</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Context Api</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Router</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>React Query</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>GraphQL</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Socket.io</span>
                </div>
              </div>
              <div className={styles.cols__2}>
              <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>JavaScript</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Typscript</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Next.js</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Figma</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>GSAP</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>SCSS</span>
                </div>
                <div>
                  <Image
                    alt="arow"
                    className={styles.arrow}
                    src="/arrow.svg"
                    width={"15"}
                    height={"15"}
                  ></Image>
                  <span>Tailwind</span>
                </div>
               
              </div>
            </div>
          </div>

          {/* photo */}
          <div className={styles.content__photo}>
            <div className={styles.container}>
              <div className={styles.tint}>
                <Image
                  alt="arow"
                  className={styles.img}
                  src="/pic3.png"
                  width={"250"}
                  height={"250"}
                ></Image>
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
