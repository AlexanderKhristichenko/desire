import { configureStore } from "@reduxjs/toolkit";
import { popupSlice } from "./popup-slice";

export const store = configureStore({
  reducer: { popup: popupSlice.reducer },
});
