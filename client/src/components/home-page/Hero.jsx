import styles from "../../styles/home-page/hero.module.css";
function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className={styles.p}>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className={styles.button}>LEARN MORE</button>
    </section>
  );
}

export default Hero;
