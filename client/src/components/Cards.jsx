import styles from "../styles/cards.module.scss";
function Cards({ children }) {
  return <div className={styles.cards}>{children}</div>;
}

export default Cards;
