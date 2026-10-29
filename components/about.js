import styles from "../styles/Pages/about.module.scss";
import Image from "next/image";

const highlight = { color: "#7cf1e2" };

// Backend first, then front end and tooling
const techCol1 = ["Python", "FastAPI", "Java", "REST APIs", "SQL", "Docker", "AWS"];
const techCol2 = ["TypeScript", "JavaScript", "React", "Next.js", "Microservices", "CI/CD", "Git"];

function TechItem({ name }) {
  return (
    <div>
      <Image
        alt=""
        className={styles.arrow}
        src="/arrow.svg"
        width={15}
        height={15}
      />
      <span>{name}</span>
    </div>
  );
}

function About() {
  return (
    <>
      <div className={styles.about}>
        {/* title */}
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
              Hello! I&apos;m Jyoti Kumari, a{" "}
              <span style={highlight}>Software Engineer</span> who enjoys the
              part of a system most users never see: the APIs, data and
              services that keep a product running. I studied{" "}
              <span style={highlight}>Computer Science</span> for my B.Tech and
              completed an <span style={highlight}>M.Tech in Information Security</span>{" "}
              at NIT Jalandhar.
            </p>

            <p className={styles.p}>
              Over <span style={highlight}>2+ years</span> I&apos;ve built REST
              APIs in Python (FastAPI), tuned SQL queries to make search
              noticeably faster, and fixed live production issues on on-call.
              I also build the React and TypeScript front ends on top, so I
              understand a feature end to end, from the database to the screen.
              Outside work, I&apos;ve solved{" "}
              <span style={highlight}>500+ DSA problems</span> on LeetCode.
            </p>

            <p className={styles.p}>
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <div className={styles.cols}>
              <div className={styles.cols__1}>
                {techCol1.map((t) => (
                  <TechItem key={t} name={t} />
                ))}
              </div>
              <div className={styles.cols__2}>
                {techCol2.map((t) => (
                  <TechItem key={t} name={t} />
                ))}
              </div>
            </div>
          </div>

          {/* photo */}
          <div className={styles.content__photo}>
            <div className={styles.container}>
              <div className={styles.tint}>
                <Image
                  alt="Jyoti Kumari"
                  className={styles.img}
                  src="/pic3.png"
                  width={250}
                  height={250}
                />
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
