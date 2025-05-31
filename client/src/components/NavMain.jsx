import styles from "../styles/navmain.module.scss";
function NavMain() {
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
  return (
    <section className={styles.section}>
      {nav_links?.map((elements) => (
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
          <a href={elements.a} className={styles.link}>
            VIEW PROJECTS
          </a>
        </div>
      ))}
    </section>
  );
}

export default NavMain;
