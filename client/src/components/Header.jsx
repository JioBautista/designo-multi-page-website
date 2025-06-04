import styles from "../styles/header.module.scss";
function Header({ children }) {
  return <section className={styles.section}>{children}</section>;
}

export default Header;
