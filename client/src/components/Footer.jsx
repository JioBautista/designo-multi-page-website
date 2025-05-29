import React from "react";
import styles from "../styles/footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.header}>
        <img src="/assets/icon.png" />
        <h1>D E S I G N O</h1>
      </div>

      <p>OUR COMPANY</p>

      <p>LOCATIONS</p>

      <p>CONTACT</p>

      <div className={styles.address}>
        <h4>Designo Central Office</h4>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>

      <div className={styles.address}>
        <h4>Contact Us (Central Office)</h4>
        <p>P: 1+ 253-863-8967</p>
        <p>M: contact@designo.co</p>
      </div>

      <div className={styles.icons}>
        <img src="/assets/social-media-icons.png" />
      </div>
    </div>
  );
}

export default Footer;
