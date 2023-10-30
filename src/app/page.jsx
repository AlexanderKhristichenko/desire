import styles from "./page.module.scss";
import { Hero } from "@/components/Hero/Hero";
import { Collection } from "@/components/UI/Collection";
import { Works } from "@/components/Works/Works";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.collections}>
        <h2 className={styles.title}>Furniture new collection</h2>
        <div className={styles.divider}></div>
        <p className={styles.text}>
          Deep v you probably haven't heard of them banh mi synth actually
          affogato. Aesthetic lyft ethical drinking vinegar austint
        </p>
        <Collection />
      </section>
      <section className={styles.banner}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles["banner-title"]}>
              Aesthetic ethical drinking
            </h2>
            <div className={styles["banner-divider"]}></div>
            <p className={styles["banner-text"]}>
              Deep v you probably haven't heard of them banh mi synth actually
              affogato. Artlyft ethical the one drinking vinegar austint
            </p>
          </div>
        </div>
      </section>
      <Works />
    </>
  );
}
