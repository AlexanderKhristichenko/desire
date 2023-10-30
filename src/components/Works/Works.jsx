import Image from "next/image";
import styles from "./Works.module.scss";

export const Works = () => {
  return (
    <section className={styles.works}>
      <div className="container">
        <h2 className={styles.title}>How it works</h2>
        <div className={styles.content}>
          <div
            className={`${styles["content-box"]} ${styles["visible-content-box"]}`}>
            <div className={`${styles.box} ${styles.start}`}>
              <div className={styles.header}>
                <Image
                  src="/icons/works1.svg"
                  width={40}
                  height={40}
                  alt="works icon"
                />
                <h3>Designer Consultation</h3>
              </div>
              <p>
                Kinfolk scenester authentic craft beer truffaut irony
                intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                bun venmo viral cliche
              </p>
            </div>
            <div className={styles.box}></div>
            <div className={`${styles.box} ${styles.bottom}`}>
              <div className={styles.header}>
                <Image
                  src="/icons/works2.svg"
                  width={40}
                  height={40}
                  alt="works icon"
                />
                <h3>Production</h3>
              </div>
              <p>Everyday carry actually neutra authentic kogi shabby chic</p>
            </div>
            <div className={styles.box}></div>
          </div>

          <div className={styles.line}></div>

          <div
            className={`${styles["content-box"]} ${styles["hidden-content-box"]}`}>
            <div className={`${styles.box} ${styles.start}`}>
              <div className={styles.header}>
                <Image
                  src="/icons/works1.svg"
                  width={40}
                  height={40}
                  alt="works icon"
                />
                <h3>Designer Consultation</h3>
              </div>
              <p>
                Kinfolk scenester authentic craft beer truffaut irony
                intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                bun venmo viral cliche
              </p>
            </div>
            <div className={`${styles.box} ${styles.hidden}`}></div>
            <div className={`${styles.box} ${styles.bottom}`}>
              <div className={styles.header}>
                <Image
                  src="/icons/works2.svg"
                  width={40}
                  height={40}
                  alt="works icon"
                />
                <h3>Production</h3>
              </div>
              <p>Everyday carry actually neutra authentic kogi shabby chic</p>
            </div>
            <div className={`${styles.box} ${styles.hidden}`}></div>
          </div>

          <div className={styles["content-box"]}>
            <div className={`${styles.box} ${styles.hidden}`}></div>
            <div className={`${styles.box} ${styles.top}`}>
              <div className={styles.header}>
                <Image
                  src="/icons/works3.svg"
                  width={40}
                  height={40}
                  alt="works icon"
                />
                <h3>Measurements</h3>
              </div>
              <p>
                Intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                bun venmo viral cliche
              </p>
            </div>
            <div className={`${styles.box} ${styles.hidden}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
