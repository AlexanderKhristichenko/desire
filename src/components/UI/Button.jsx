import styles from "./Button.module.scss";

export const Button = ({ value, type }) => {
  return (
    <button type={type} className={styles.btn}>
      {value}
    </button>
  );
};
