import Image from "next/image";
import styles from "./Blog.module.scss";
import Link from "next/link";

export const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className="container">
        <h2 className={styles.title}>More inspiration ideas in our blog</h2>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <Link href="/blog/single">
              <Image
                src="/blog/blog1.jpg"
                alt="Inrerior"
                width={540}
                height={307}
                loading="lazy"
              />
              <p className={styles.info}>
                March 12, 2020 | by Ann Summers | Inrerior
              </p>
              <h3>
                Listicle actually selvage activated charcoal for the drinking
                vinegar
              </h3>
            </Link>
          </div>
          <div className={styles.content}>
            <Link href="/blog/single">
              <Image
                src="/blog/blog2.jpg"
                alt="Dining room interior"
                width={540}
                height={307}
                loading="lazy"
              />
              <p className={styles.info}>
                September 28,2020 | by Finnagan Morningstar | Dining room
                interior
              </p>
              <h3>Red selfies edison bulb four dollar toast humblebrag</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
