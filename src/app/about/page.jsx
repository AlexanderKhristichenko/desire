import styles from "./page.module.scss";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";
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
    </div>
  );
}
