import styles from "../styles/header.module.css";
function Header({ children }) {
  return <section className={styles.section}>{children}</section>;
}

export default Header;
