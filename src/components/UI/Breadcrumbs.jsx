import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = ({ children, className }) => {
  return (
    <div className={`${styles.breadcrumbs} ${className ? className : ""}`}>
      <div className="container">{children}</div>
    </div>
  );
};
