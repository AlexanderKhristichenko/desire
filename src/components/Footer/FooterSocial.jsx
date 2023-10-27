import Image from "next/image";
import Link from "next/link";
import styles from "./FooterSocial.module.scss";

export const FooterSocial = () => {
  return (
    <div className={styles.social}>
      <Link href="#" className={styles.link}>
        <Image
          src="/icons/facebook.svg"
          width={16}
          height={16}
          alt="facebook icon"
        />
        Facebook
      </Link>
      <Link href="#" className={styles.link}>
        <Image
          src="/icons/instagram.svg"
          width={16}
          height={16}
          alt="instagram icon"
        />
        Instagram
      </Link>
      <Link href="#" className={styles.link}>
        <Image
          src="/icons/pinterest.svg"
          width={16}
          height={16}
          alt="pinterest icon"
        />
        Pinterest
      </Link>
      <Link href="#" className={styles.link}>
        <Image
          src="/icons/whatsapp.svg"
          width={16}
          height={16}
          alt="whatsapp icon"
        />
        WhatsApp
      </Link>
      <Link href="#" className={styles.link}>
        <Image
          src="/icons/youtube.svg"
          width={16}
          height={16}
          alt="youtube icon"
        />
        Youtube
      </Link>
    </div>
  );
};
