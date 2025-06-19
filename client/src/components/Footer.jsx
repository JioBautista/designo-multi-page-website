import styles from "../styles/footer.module.scss";
import GetInTouch from "./GetInTouch";
import { Link, useLocation } from "react-router";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }
  const location = useLocation();
  console.log(location.pathname);
  return (
    <footer className={styles.footer}>
      {location.pathname === "/contact" ? null : <GetInTouch />}
      <header>
        <img src="/assets/icon.png" />
        <h1>D E S I G N O</h1>
      </header>

      <nav className={styles.nav}>
        <Link to="/about">
          <p onClick={scrollToTop}>OUR COMPANY</p>
        </Link>
        <Link to="/locations">
          <p onClick={scrollToTop}>LOCATIONS</p>
        </Link>
        <Link to="/contact">
          <p onClick={scrollToTop}>CONTACT</p>
        </Link>
      </nav>

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
    </footer>
  );
}

export default Footer;
