import Image from "next/image";
import styles from "./BlogCard.module.scss";
import Link from "next/link";

export const BlogCard = ({ img, title, tagline, text, link }) => {
  return (
    <Link href={link}>
      <div className={styles.card}>
        <div>
          <Image src={img} alt={title} width={730} height={415} />
        </div>
        <div className={styles.tagline}>{tagline}</div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Link>
  );
};
