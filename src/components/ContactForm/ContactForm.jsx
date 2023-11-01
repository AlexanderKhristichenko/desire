"use client";

import styles from "./ContactForm.module.scss";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { showMsg, toggle } from "@/store/popup-slice";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMsg, setEnteredMsg] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredEmail.trim().includes("@") && enteredName.trim()) {
      dispatch(
        showMsg({
          msg: `${enteredName} Thank you for your message, I will be in touch with you shortly `,
        }),
      );
      dispatch(toggle({ isVisiblePopup: true }));
    }

    setEnteredName("");
    setEnteredEmail("");
    setEnteredMsg("");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <Input
          type="text"
          placeholder="Your name"
          className={styles.input}
          value={enteredName}
          onChange={(event) => setEnteredName(event.target.value)}
        />
        <Input
          type="email"
          placeholder="Your e-mail"
          className={styles.input}
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="Your message"
          rows="4"
          value={enteredMsg}
          onChange={(event) => setEnteredMsg(event.target.value)}></textarea>
      </div>
      <Button type="submit" value="Send" />
    </form>
  );
};
