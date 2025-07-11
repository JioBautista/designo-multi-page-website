import styles from "../styles/getintouch.module.css";

// This component appears on every page except in contact page.
function GetInTouch() {
  return (
    <div className={styles.intouchBlock}>
      <section className={styles.intouch}>
        <div>
          <h1 className={styles.title}>Let's talk about your project</h1>
          <p className={styles.description}>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className={styles.button}>GET IN TOUCH</button>
      </section>
      <div className={styles.halfblock}></div>
    </div>
  );
}

export default GetInTouch;
