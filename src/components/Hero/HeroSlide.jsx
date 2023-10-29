import styles from "./HeroSlide.module.scss";
import Image from "next/image";

export const HeroSlide = ({ img, title, text }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["box-image"]}>
          <Image src={img} alt={title} width={703} height={813} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider}></div>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
      <div className={styles.mask}></div>
    </>
  );
};
