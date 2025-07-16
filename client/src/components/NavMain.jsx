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
    <section
      className={location.pathname === "/" ? styles.section : styles.flex}
    >
      {/* WEB DESIGN */}
      <div
        className={styles.box1}
        style={{
          display: location.pathname === "/web-design" ? "none" : "flex",
        }}
      >
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

      {/* APP DESIGN */}
      <div
        className={styles.box2}
        style={{
          display: location.pathname === "/app-design" ? "none" : "flex",
        }}
      >
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

      {/* GRAPHIC DESIGN */}
      <div
        className={styles.box3}
        style={{
          display: location.pathname === "/graphic-design" ? "none" : "flex",
        }}
      >
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
