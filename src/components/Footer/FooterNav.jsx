import Link from "next/link";
import styles from "./FooterNav.module.scss";

export const FooterNav = () => {
  return (
    <div className={styles.nav}>
      <Link href="/about" className={styles.link}>
        About
      </Link>
      <Link href="/gallery" className={styles.link}>
        Gallery
      </Link>
      <Link href="/blog" className={styles.link}>
        Blog
      </Link>
      <Link href="/contact" className={styles.link}>
        Contact
      </Link>
    </div>
  );
};
