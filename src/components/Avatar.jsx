import styles from "../styles/Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
