import styles from "../../styles/home-page/home.module.scss";
function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button>LEARN MORE</button>
    </section>
  );
}

export default Hero;
