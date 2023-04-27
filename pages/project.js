import styles from "../styles/Pages/project.module.scss";
import Image from "next/image";

function Project() {
  return (
    <>
      <div className={styles.project}>
        <div className={styles.title}>
          <span className={styles.title__count}>03.</span>
          <h2 className={styles.title__name}>Some Things I’ve Built</h2>
          <div className={styles.title__line}>
            <hr style={{ borderWidth: ".1px", borderColor: "#8892B0" }} />
          </div>
        </div>

        {/* project 1 */}
        <section className={styles.project__1}>
          <div className={styles.photo}>
            <Image
              className={styles.img}
              src="/project2.png"
              width={"630"}
              height={"400"}
            ></Image>
          </div>
          <div className={styles.content}>
            <h4 className={styles.content__sup}>Featured Project</h4>
            <h2 className={styles.content__heading}>The FitClub</h2>
            <div className={styles.content__box}>
              <p>
                It is gym website which used by gym user to get Information
                about gym , they can login and Sign in. they can check their
                program , plans and other Info.
              </p>
            </div>
            <h3 className={styles.content__techstack}>React Firebase CSS</h3>
            <div className={styles.content__links}>
              <div>
                {" "}
                <Image
                  className={styles.link}
                  src="/github2.svg"
                  width={"25"}
                  height={"25"}
                ></Image>
              </div>
              <div>
                {" "}
                <Image
                  className={styles.link}
                  src="/link.svg"
                  width={"25"}
                  height={"25"}
                ></Image>
              </div>
            </div>
          </div>
        </section>

        {/* project 2 */}
        <section className={styles.project__2}>
          <div className={styles.content2}>
            <h4 className={styles.content2__sup2}>Featured Project</h4>
            <h2 className={styles.content2__heading2}>Travel Tour</h2>
            <div className={styles.content2__box2}>
              <p>
                It is travel website , which a lot Visually appiling animation,
                User can login and Sign . Stripe Payment method is added. there
                subscribtion cards to book trip plan and user Testimonials.
              </p>
            </div>

            <h3 className={styles.content2__techstack2}>React Firebase Sass</h3>
            <div className={styles.content2__links2}>
              <div>
                <Image
                  className={styles.link2}
                  src="/github2.svg"
                  width={"25"}
                  height={"25"}
                ></Image>
              </div>
              <div>
                <Image
                  className={styles.link2}
                  src="/link.svg"
                  width={"25"}
                  height={"25"}
                ></Image>
              </div>
            </div>
          </div>
          <div className={styles.photo2}>
            <Image
              className={styles.img2}
              src="/project4.png"
              width={"630"}
              height={"400"}
            ></Image>
          </div>
        </section>

        {/* project 3 */}
        <section className={styles.project__3}>
          <div className={styles.photo}>
            <Image
              className={styles.img}
              src="/project1.png"
              width={"630"}
              height={"400"}
            ></Image>
          </div>
          <div className={styles.content}>
            <h4 className={styles.content__sup}>Featured Project</h4>
            <h2 className={styles.content__heading}>Town of Book</h2>
            <div className={styles.content__box}>
              <p>
                This website used for renting books and buy books on rent. Here
                Simple readers can also upload their book easily and rent that.
                User can register, sign in , Sign up , Favourite tab , dashboard
                tab and payment option.
              </p>
            </div>
            <h3 className={styles.content__techstack}>Next.js Mangodb Sass</h3>
            <div className={styles.content__links}>
              <div>
                {" "}
                <Image
                  className={styles.link}
                  src="/github2.svg"
                  width={"25"}
                  height={"25"}
                ></Image>
              </div>
              <div>
                {" "}
                <Image
                  className={styles.link}
                  src="/link.svg"
                  width={"25"}
                  height={"25"}
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Project;
