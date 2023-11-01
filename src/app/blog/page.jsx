import { BlogCard } from "@/components/UI/BlogCard";
import styles from "./page.module.scss";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Desire -  Blog",
  description: "Furniture collection",
};

export default function BlogPage() {
  return (
    <div>
      <Breadcrumbs className="breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
      </Breadcrumbs>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles["blog-info"]}>
            <BlogCard
              link="/blog/single"
              img="/blog/blog3.jpg"
              title="Red selfies edison bulb four dollar toast humblebrag for the furniture"
              tagline="August 15, 2020 | by Ann Summers | Bedroom Furniture"
              text="Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
            />
            <div className={styles.quote}>
              <p>
                “Simplicity is not the goal. It is the by-product of a good idea
                and modest expectations”{" "}
              </p>
              <div className={styles.divider}></div>
              <h2>Paul Rand</h2>
            </div>
            <BlogCard
              link="/blog/single"
              img="/blog/blog4.jpg"
              title="Authentic kogi shabby chic"
              tagline="August 12, 2020 | by Lux Morningstar | Design"
              text="Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
            />
            <BlogCard
              link="/blog/single"
              img="/blog/blog1.jpg"
              title="Semiotics fixie four dollar toast, next level woke"
              tagline="August 18, 2020 | by Ann Summers | Table Furniture"
              text="Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
