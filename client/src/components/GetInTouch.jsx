import styles from "../styles/footer.module.scss";

// This component appears on every page except in contact page.
function GetInTouch() {
  return (
    <div className={styles.intouchBlock}>
      <div className={styles.intouch}>
        <section>
          <h1>Let's talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
          <button className={styles.button}>GET IN TOUCH</button>
        </section>
      </div>
    </div>
  );
}

export default GetInTouch;
