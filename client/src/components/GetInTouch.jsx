import styles from "../styles/footer.module.scss";

function GetInTouch() {
  return (
    <div className={styles.intouch}>
      <section>
        <h1>Let's talk about your project</h1>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button>GET IN TOUCH</button>
      </section>
    </div>
  );
}

export default GetInTouch;
