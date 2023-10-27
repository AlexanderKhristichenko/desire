"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [isToggleNav, setIsToggleNav] = useState(false);
  const toogleNavHandler = () => {
    if (window.innerWidth <= 768) {
      setIsToggleNav(!isToggleNav);
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Image
              src="/logo.svg"
              alt="Logo Desire"
              width={97}
              height={31}
              priority={true}
            />
          </div>

          <nav className={`${styles.nav} ${!isToggleNav ? "" : styles.opened}`}>
            <div className={styles.box}>
              <Link
                href="/"
                className={`${styles.link} ${styles["home-link"]}`}
                onClick={toogleNavHandler}>
                Home
              </Link>
              <Link
                href="/about"
                className={styles.link}
                onClick={toogleNavHandler}>
                About
              </Link>
              <Link
                href="/gallery"
                className={styles.link}
                onClick={toogleNavHandler}>
                Gallery
              </Link>
            </div>
            <div className={styles["logo-box"]}>
              <Link href="/" className={styles.link}>
                <Image
                  src="/logo.svg"
                  alt="Logo Desire"
                  width={97}
                  height={31}
                />
              </Link>
            </div>
            <div className={styles.box}>
              <Link
                href="/blog"
                className={styles.link}
                onClick={toogleNavHandler}>
                Blog
              </Link>
              <Link
                href="/contact"
                className={styles.link}
                onClick={toogleNavHandler}>
                Contact
              </Link>
            </div>
          </nav>

          <button
            className={`${styles.burger} ${!isToggleNav ? "" : styles.active}`}
            onClick={toogleNavHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
