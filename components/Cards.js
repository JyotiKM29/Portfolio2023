import styles from "../styles/component/card.module.scss";

function Cards() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__left}>
          <h1>Work</h1>
          <h2>Simplify your work admin , policies and communications.</h2>
          <div className={styles.card__left_div}>
            <ul>
              <li>
                <h3>Stay across company news, shouts and events</h3>
              </li>

              <li>
                <h3>Complete training and tracks goals</h3>
              </li>

              <li>
                <h3>Manage leave requests and timesheets</h3>
              </li>
            </ul>
          </div>
          <button className={styles.card__left_button}>Try Now</button>
        </div>
        <div className={styles.card__right}></div>
      </div>
    </>
  );
}

export default Cards;
