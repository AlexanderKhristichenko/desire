import styles from "./page.module.scss";
import { Hero } from "@/components/Hero/Hero";
import { Collection } from "@/components/UI/Collection";

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
    </>
  );
}
