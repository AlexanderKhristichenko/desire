import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Desire -  Gallery",
  description: "Furniture collection",
};

export default function GalleryPage() {
  return (
    <div className={styles.main}>
      <Breadcrumbs className="breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/gallery">Gallery</Link>
      </Breadcrumbs>

      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.item1}>
            <Image
              src="/gallery/g1.jpg"
              alt="Gallery Photo"
              width={812}
              height={1148}
              loading="lazy"
            />
          </div>
          <div className={styles.item2}>
            <Image
              src="/gallery/g2.jpg"
              alt="Gallery Photo"
              width={493}
              height={559}
              loading="lazy"
            />
          </div>
          <div className={styles.item3}>
            <Image
              src="/gallery/g3.jpg"
              alt="Gallery Photo"
              width={493}
              height={559}
              loading="lazy"
            />
          </div>
          <div className={styles.item4}>
            <Image
              src="/gallery/g4.jpg"
              alt="Gallery Photo"
              width={493}
              height={559}
              loading="lazy"
            />
          </div>
          <div className={styles.item5}>
            <Image
              src="/gallery/g5.jpg"
              alt="Gallery Photo"
              width={493}
              height={559}
              loading="lazy"
            />
          </div>
          <div className={styles.item6}>
            <Image
              src="/gallery/g6.jpg"
              alt="Gallery Photo"
              width={812}
              height={1148}
              loading="lazy"
            />
          </div>
          <div className={styles.item7}>
            <Image
              src="/gallery/g7.jpg"
              alt="Gallery Photo"
              width={812}
              height={1148}
              loading="lazy"
            />
          </div>
          <div className={styles.item8}>
            <Image
              src="/gallery/g8.jpg"
              alt="Gallery Photo"
              width={812}
              height={1148}
              loading="lazy"
            />
          </div>
          <div className={styles.item9}>
            <Image
              src="/gallery/g9.jpg"
              alt="Gallery Photo"
              width={812}
              height={1148}
              loading="lazy"
            />
          </div>
          <div className={styles.item10}>
            <Image
              src="/gallery/g10.jpg"
              alt="Gallery Photo"
              width={812}
              height={1148}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
