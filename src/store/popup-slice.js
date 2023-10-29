import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: { isVisiblePopup: false, msg: "" },
  reducers: {
    toggle(state, action) {
      state.isVisiblePopup = action.payload.isVisiblePopup;
    },
    showMsg(state, action) {
      state.msg = action.payload.msg;
    },
  },
});

export const { toggle, showMsg } = popupSlice.actions;
