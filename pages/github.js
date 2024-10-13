import styles from "../styles/Component/github.module.scss";
import Image from "next/image";
import data from "../components/githubDetail";
import Link from "next/link";

function Github() {
  return (
    <div className={styles.githubpage}>
      <h1 className={styles.heading}>Other Noteworthy Projects</h1>
      <Link href="https://github.com/JyotiKM29?tab=repositories">
      <h2 className={styles.heading__sub}>view the archive</h2>
      </Link>
     
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.box} key={item.id}>
            <div className={styles.upperside}>
              <div>
                <Image
                  alt="icon"
                  src="/folder.svg"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className={styles.upperside__icons}>
                <Link href={item?.link1 ?? "#"}>
                  <Image
                    alt="icon"
                    className={styles.link}
                    src="/github2.svg"
                    width={22}
                    height={22}
                  ></Image>
                </Link>
                <Link href={item?.link2 ?? "#"}>
                  <Image
                    alt="icon"
                    className={styles.link}
                    src="/link.svg"
                    width={22}
                    height={22}
                  ></Image>
                </Link>
              </div>
            </div>
            <div className={styles.content}>
              <h2 className={styles.content__tittle}>{item.tittle}</h2>
              <p className={styles.content__des}>{item.des}</p>
              <div className={styles.content__techstack}>
                <span className={styles.tech}>{item.tech1}</span>
                <span className={styles.tech}>{item.tech2}</span>
                <span className={styles.tech}>{item.tech3}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btnContainer}>
      <Link href="https://github.com/JyotiKM29/">
        <button className={styles.show}>Show More</button>
      </Link></div>
    </div>
  );
}
export default Github;
