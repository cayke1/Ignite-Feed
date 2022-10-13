import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo ignite" />
      <h2>Ignite Feed</h2>
    </header>
  );
}
