import { useLocation, Link } from "react-router";
import styles from "../styles/navmain.module.css";
function NavMain() {
  const location = useLocation();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }
  return (
    <section className={styles.section}>
      <div className={styles.box1}>
        <h1 className={styles.title}>Web Design</h1>

        <div className={styles.links}>
          <Link to="/web-design">
            <p className={styles.link} onClick={scrollToTop}>
              VIEW PROJECTS
            </p>
          </Link>
          <img src="/assets/shared/desktop/icon-right-arrow.svg" />
        </div>
      </div>

      <div className={styles.box2}>
        <h1 className={styles.title}>App Design</h1>

        <div className={styles.links}>
          <Link to="/app-design">
            <p className={styles.link} onClick={scrollToTop}>
              VIEW PROJECTS
            </p>
          </Link>
          <img src="/assets/shared/desktop/icon-right-arrow.svg" />
        </div>
      </div>

      <div className={styles.box3}>
        <h1 className={styles.title}>Graphic Design</h1>

        <div className={styles.links}>
          <Link to="/graphic-design">
            <p className={styles.link} onClick={scrollToTop}>
              VIEW PROJECTS
            </p>
          </Link>
          <img src="/assets/shared/desktop/icon-right-arrow.svg" />
        </div>
      </div>
    </section>
  );
}

export default NavMain;
