import React from "react";
import styles from "../styles/cards.module.scss";

function Card({ elements }) {
  return (
    <section className={styles.card}>
      <img src={elements.img} />
      <div>
        <h1>{elements.title}</h1>
        <p>{elements.paragraph}</p>
      </div>
    </section>
  );
}

export default Card;
