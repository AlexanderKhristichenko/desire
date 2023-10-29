"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "./Popup.module.scss";
import { showMsg, toggle } from "@/store/popup-slice";

export const Popup = () => {
  const dispatch = useDispatch();
  const showPopup = useSelector((state) => state.popup.isVisiblePopup);
  const newMsg = useSelector((state) => state.popup.msg);

  const closePopupHandler = () => {
    dispatch(showMsg({ msg: "" }));
    dispatch(toggle({ isVisiblePopup: false }));
  };

  return (
    <>
      {showPopup && (
        <div className={styles.backdrop} onClick={closePopupHandler}>
          <div className={styles.popup}>
            <div className={styles.text}>{newMsg}</div>
          </div>
        </div>
      )}
    </>
  );
};
