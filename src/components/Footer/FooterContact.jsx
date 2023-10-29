"use client";

import Image from "next/image";
import styles from "./FooterContact.module.scss";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { showMsg, toggle } from "@/store/popup-slice";
import { useState } from "react";

export const FooterContact = () => {
  const dispatch = useDispatch();
  const [enteredEmail, setEnteredEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().includes("@")) {
      dispatch(
        showMsg({ msg: `Thanks for your subscription ${enteredEmail}` }),
      );
      dispatch(toggle({ isVisiblePopup: true }));
    }

    setEnteredEmail("");
  };

  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.text}>
        Keffiyeh poutine etsy, paleo cray put a bird on it microdosing
        <br />
        schlitz you probably occupy
      </p>
      <a href="mailto:ouremailaddress@email.com" className={styles.email}>
        <Image
          src="/icons/envelope.svg"
          width={16}
          height={12}
          alt="envelope icon"
        />
        ouremailaddress@email.com
      </a>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          type="email"
          placeholder="Subscribe by email"
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <Button type="submit" value="Send" />
      </form>
    </div>
  );
};
