import styles from "./Input.module.scss";
import React from "react";

export const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className ? className : ""}`}
      required
    />
  );
};
