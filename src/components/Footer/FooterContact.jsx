import Image from "next/image";
import styles from "./FooterContact.module.scss";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const FooterContact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.text}>
        Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
        <br />
        schlitz you probably occupy
      </p>
      <a href="mailto:ouremailaddress@email.com" className={styles.email}>
        <Image
          src="/icons/envelope.svg"
          width={16}
          height={12}
          alt="envelope icon"
        />
        ouremailaddress@email.com
      </a>
      <form className={styles.form}>
        <Input type="email" placeholder="Subscribe by email" />
        <Button type="submit" value="Send" />
      </form>
    </div>
  );
};
