import { SideBar } from "@/components/SideBar/SideBar";
import styles from "./page.module.scss";
import Image from "next/image";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import Link from "next/link";

export default function SinglePage() {
  return (
    <div>
      <article className={styles.article}>
        <Breadcrumbs className="breadcrumbs">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> /{" "}
          <Link href="/blog/single">Single Post</Link>
        </Breadcrumbs>
        <div className="container">
          <div className={styles.wrap}>
            <div className={styles["article-info"]}>
              <div>
                <Image
                  src="/blog/blog3.jpg"
                  alt="Red selfies edison bulb four dollar toast design humblebrag for the furniture"
                  width={730}
                  height={415}
                  loading="lazy"
                />
              </div>
              <div className={styles.tagline}>
                August 15, 2020 | by Ann Summers | Bedroom Furniture
              </div>
              <h2>
                Red selfies edison bulb four dollar toast design humblebrag for
                the furniture
              </h2>
              <p className={styles.text}>
                Everyday carry actually neutra authentic kogi shabby chic migas
                small batch craft beer. Literally williamsburg tote bag
                farm-to-table mustache ugh deep v irony. Af man bun copper mug
                iPhone enamel pin pug selvage hammock palo santo godard
                thundercats coloring book yuccie woke. Ugh pok pok taxidermy
                pabst enamel pin edison bulb farm-to-table. Yuccie portland
                kickstarter, readymade ramps humblebrag ennui banjo mumblecore
                vaporware pickled cray stumptown 8-bit mlkshk. Tumeric tousled
                austin, kinfolk scenester authentic craft beer truffaut irony
                intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                bun venmo viral cliche. Tousled yr williamsburg austin edison
                bulb cloud bread vegan street art. Locavore food truck trust
                fund palo santo asymmetrical, franzen deep v marfa kogi whatever
                swag pop-up seitan.
              </p>
              <div className={styles.quote}>
                <p>
                  “Simplicity is not the goal. It is the by-product of a good
                  idea and modest expectations”
                </p>
                <div className={styles.divider}></div>
                <h3>Paul Rand</h3>
              </div>
              <p className={styles.text}>
                Af man bun copper mug iPhone enamel pin pug selvage hammock palo
                santo godard thundercats coloring book yuccie woke. Ugh pok pok
                taxidermy pabst enamel pin edison bulb farm-to-table. Yuccie
                portland kickstarter, readymade ramps humblebrag ennui banjo
                mumblecore vaporware pickled cray stumptown 8-bit mlkshk.
                Tumeric tousled austin, kinfolk scenester authentic craft beer
                truffaut irony intelligentsia YOLO lomo bushwick coloring book.
                Semiotics man bun venmo viral cliche. Tousled yr williamsburg
                austin edison bulb cloud bread vegan street art. Locavore food
                truck trust fund palo santo asymmetrical, franzen deep v marfa
                kogi whatever swag pop-up seitan.
              </p>
            </div>
            <SideBar />
          </div>
        </div>
      </article>
    </div>
  );
}
