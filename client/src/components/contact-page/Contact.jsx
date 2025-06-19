import Header from "../Header";
import Locations from "../Locations";
import styles from "../../styles/contact-page/contact.module.scss";

function Contact() {
  return (
    <main>
      <Header>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line
        </p>
      </Header>

      <form className={styles.form}>
        <input className={styles.input} placeholder="Name" />
        <input className={styles.input} placeholder="Email Address" />
        <input className={styles.input} placeholder="Phone" />
        <textarea className={styles.textarea} placeholder="Your Message" />
        <button className={styles.button}>SUBMIT</button>
      </form>

      <Locations />
    </main>
  );
}

export default Contact;
