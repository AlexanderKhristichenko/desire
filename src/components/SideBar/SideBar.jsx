import Link from "next/link";
import styles from "./SideBar.module.scss";
import Image from "next/image";

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.categories}>
        <h2>Categories</h2>
        <Link href="/blog">Dining room (1)</Link>
        <Link href="/blog">Office furniture (12)</Link>
        <Link href="/blog">Simple interiror design (2)</Link>
        <Link href="/blog">Design (4)</Link>
        <Link href="/blog">Bedroom Furniture (1)</Link>
      </div>
      <div className={styles.posts}>
        <h2>Recent Posts</h2>
        <Link href="/blog/single">
          <h3>Cred selfies edison bulb four dollar toast humblebrag</h3>
          <p>August 10, 2020 | by Ann Summers</p>
        </Link>
        <Link href="/blog/single">
          <h3>
            Semiotics fixie four dollar toast, next level woke scenester direct
            trade photo booth
          </h3>
          <p>September 30 ,2020 | by Ann Summers</p>
        </Link>
        <Link href="/blog/single">
          <h3>Cred selfies edison bulb four dollar toast humblebrag</h3>
          <p>May 2, 2020 | by Ann Summers</p>
        </Link>
      </div>
      <div className={styles.tags}>
        <h2>Tags</h2>
        <div className={styles.wrap}>
          <div>Dining room futniture</div>
          <div>Chair</div>
          <div>Table</div>
          <div>Bedroom</div>
          <div>Office Furniture</div>
        </div>
      </div>
      <div className={styles.social}>
        <Link href="/blog">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={16}
            height={18}
          />
        </Link>
        <Link href="/blog">
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={16}
            height={18}
          />
        </Link>
        <Link href="/blog">
          <Image
            src="/icons/pinterest.svg"
            alt="Pinterest"
            width={16}
            height={18}
          />
        </Link>
        <Link href="/blog">
          <Image
            src="/icons/whatsapp.svg"
            alt="Whatsapp"
            width={16}
            height={18}
          />
        </Link>
        <Link href="/blog">
          <Image
            src="/icons/youtube.svg"
            alt="Youtube"
            width={16}
            height={18}
          />
        </Link>
      </div>
    </aside>
  );
};
