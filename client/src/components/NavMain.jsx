import { useLocation, Link } from "react-router";
import styles from "../styles/navmain.module.scss";
function NavMain() {
  const location = useLocation();
  const nav_links = [
    {
      h1: "web design",
      a: "/web-design",
      bgImg: "/assets/home/mobile/image-web-design.jpg",
    },
    {
      h1: "app design",
      a: "/app-design",
      bgImg: "/assets/home/mobile/image-app-design.jpg",
    },
    {
      h1: "graphic design",
      a: "/graphic-design",
      bgImg: "/assets/home/mobile/image-graphic-design.jpg",
    },
  ];

  const filter_links = nav_links.filter(
    (elements) => elements.a !== location.pathname
  );
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }
  return (
    <section className={styles.section}>
      {filter_links?.map((elements) => (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${elements.bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "5rem 3rem",
            textAlign: "center",
          }}
        >
          <h1 className={styles.title}>{elements.h1}</h1>
          <Link to={elements.a}>
            <p className={styles.link} onClick={scrollToTop}>
              VIEW PROJECTS
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default NavMain;
