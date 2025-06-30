import styles from "../styles/footer.module.css";
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
      <header className={styles.header}>
        <img src="/assets/icon.png" />
        <h1>D E S I G N O</h1>
      </header>

      <nav className={styles.nav}>
        <Link to="/about" onClick={scrollToTop}>
          OUR COMPANY
        </Link>
        <Link to="/locations" onClick={scrollToTop}>
          LOCATIONS
        </Link>
        <Link to="/contact" onClick={scrollToTop}>
          CONTACT
        </Link>
      </nav>

      <span className={styles.griditem1}>
        <div className={styles.address}>
          <h4>Designo Central Office</h4>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
      </span>

      <span className={styles.griditem2}>
        <div className={styles.address}>
          <h4>Contact Us (Central Office)</h4>
          <p>P: 1+ 253-863-8967</p>
          <p>M: contact@designo.co</p>
        </div>
      </span>

      <div className={styles.icons}>
        <img src="/assets/social-media-icons.png" />
      </div>
    </footer>
  );
}

export default Footer;
