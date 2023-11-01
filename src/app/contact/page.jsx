import styles from "./page.module.scss";

import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
import { Collection } from "@/components/UI/Collection";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm/ContactForm";

export const metadata = {
  title: "Desire -  Contact",
  description: "Furniture collection",
};

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <Breadcrumbs className="breadcrumbs">
        <Link href="/">Home</Link> / <Link href="/contact">Contact</Link>
      </Breadcrumbs>

      <div className={styles.map}>
        <Image
          src="/map.jpg"
          alt="map"
          width={1920}
          height={740}
          loading="lazy"
        />
      </div>

      <div className="container">
        <h2>Contact Us</h2>
        <div className={styles.divider}></div>

        <div className={styles.wrap}>
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
          <p>
            Vexillologist vape microdosing freegan pork belly deep v direct
            trade cray single-origin coffee street art. Viral shaman mustache
            master cleanse, pour-over affogato poutine copper mug marfa fanny
            pack normcore. Lo-fi pop-up banjo portland, echo park hammock
          </p>
          <div className={styles.address}>
            <p>(415) 829-7934 </p>
            <p>725 Green St</p>
            <p>San Francisco, California(CA), 94133</p>
          </div>
          <a className={styles.email} href="mailto:ouremailaddress@email.com">
            <Image
              src="/icons/envelope.svg"
              alt="envelope"
              width={16}
              height={16}
            />
            ouremailaddress@email.com
          </a>

          <ContactForm />
        </div>
      </div>
      <Collection />
    </div>
  );
}
