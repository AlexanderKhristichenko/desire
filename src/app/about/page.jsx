import styles from "./page.module.scss";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desire -  About",
  description: "Furniture collection",
};

export default function AboutPage() {
  return (
    <div className={styles.main}>
      <Breadcrumbs className={styles.breadcrumbs}>
        <Link href="/">Home</Link> / <Link href="/about">About</Link>
      </Breadcrumbs>
      <section className={styles.hero}>
        <h2>About Us</h2>
      </section>
      <section className={styles.about}>
        <div className="container">
          <h2>
            Balance in the simple through an informed marriage of design,
            functional and craft
          </h2>
          <div className={styles.divider}></div>
          <div className={styles.text}>
            <p>
              Vexillologist vape microdosing freegan pork belly deep v direct
              trade cray single-origin coffee street art. Viral shaman mustache
              master cleanse, pour-over affogato poutine copper mug marfa fanny
              pack normcore. Lo-fi pop-up banjo portland, echo park hammock
              chillwave literally post-ironic ramps subway tile kitsch. Shaman
              tumblr fixie echo park street art. Enamel pin vaporware wayfarers,
              organic succulents hella sustainable cardigan.
            </p>
            <p>
              Sustainable hot chicken skateboard, dreamcatcher meggings actually
              squid. Slow-carb everyday carry +1 art party microdosing, put a
              bird on it brooklyn tilde distillery pork belly single-origin
              coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn,
              viral intelligentsia leggings raw denim kombucha tote bag
              messenger bag chambray vape coloring book scenester. Activated
              charcoal wayfarers church-key tote bag synth brunch. Retro
              cornhole
            </p>
          </div>
        </div>
        <Image
          src="/video_post.jpg"
          alt="video post"
          width={1920}
          height={415}
          loading="lazy"
        />
      </section>
    </div>
  );
}
