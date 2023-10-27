import styles from "./Footer.module.scss";
import { FooterContact } from "./FooterContact";
import { FooterNav } from "./FooterNav";
import { FooterSocial } from "./FooterSocial";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrap}>
          <FooterContact />
          <FooterSocial />
          <FooterNav />
        </div>
      </div>
      <div className={styles.address}>
        674 Gonzales Drive. Washington, PA 15301
      </div>
    </footer>
  );
};
