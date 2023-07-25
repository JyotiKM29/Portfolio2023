import styles from '../styles/component/footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <h4>Acknowledgement of Country</h4>
        <p>
          We acknowledgement Aboriginal and Torres Strait Islander peoples as
          the First Australians and Traditional Custodians of the lands where we
          live, learn and work.
        </p>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom_logo}>
          {/* Logo */}
          <h1>Chaabi</h1>
          <button>Download Now</button>
        </div>
        <div className={styles.footer__bottom_list}>
          <h3 className={styles.footer__bottom_heading}>Product</h3>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
        </div>

        {/* product */}
        <div className={styles.footer__bottom_list}>
          <h3 className={styles.footer__bottom_heading}>Product</h3>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
        </div>

        {/* Support */}
        <div className={styles.footer__bottom_list}>
          <h3 className={styles.footer__bottom_heading}>Product</h3>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
        </div>

        {/* Get in Touch */}
        <div className={styles.footer__bottom_list}>
          <h3 className={styles.footer__bottom_heading}>Product</h3>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
        </div>

        <div className={styles.footer__bottom_list}>
          <h3 className={styles.footer__bottom_heading}>Product</h3>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
          <h5 className={styles.footer__bottom_subheading}>Features</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
