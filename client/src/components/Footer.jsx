import React from "react";
import classes from "../styles/footer.module.scss";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.header}>
        <img src="/assets/icon.png" />
        <h1>D E S I G N O</h1>
      </div>

      <p>OUR COMPANY</p>

      <p>LOCATIONS</p>

      <p>CONTACT</p>

      <div>
        <h2>Designo Central Office</h2>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>

      <div>
        <h2>Contact Us (Central Office)</h2>
        <p>P: 1+ 253-863-8967</p>
        <p>M: contact@designo.co</p>
      </div>

      <div>
        <h1>Social media icons</h1>
      </div>
    </div>
  );
}

export default Footer;
