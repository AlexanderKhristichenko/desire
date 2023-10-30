import Image from "next/image";
import styles from "./Details.module.scss";

export const Details = () => {
  return (
    <section className={styles.details}>
      <div className="container">
        <h2>Our Inspiration in details</h2>
        <div className={styles.divider}></div>
        <p>
          Semiotics fixie four dollar toast, next level woke scenester direct
          trade photo booth helvetica jean shorts. Fanny pack church-key
          cornhole, banh mi thundercats gochujang keytar.
        </p>
      </div>
      <div className={styles.banner}>
        <div className={styles.img}>
          <Image
            src="/chair2.png"
            alt="chiar image"
            width={433}
            height={507}
            loading="lazy"
          />
        </div>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3>Design and technical drawings</h3>
              <p>80%</p>
            </div>
            <div className={styles.progress}>
              <div style={{ width: "80%", backgroundColor: "#363838" }}></div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3>Measurments</h3>
              <p>70%</p>
            </div>
            <div className={styles.progress}>
              <div style={{ width: "70%", backgroundColor: "#363838" }}></div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3>Furniture functionality analysis</h3>
              <p>75%</p>
            </div>
            <div className={styles.progress}>
              <div style={{ width: "75%", backgroundColor: "#363838" }}></div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3>Interior visualization</h3>
              <p>40%</p>
            </div>
            <div className={styles.progress}>
              <div style={{ width: "40%", backgroundColor: "#363838" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
