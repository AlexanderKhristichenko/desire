"use client";

import { Provider } from "react-redux";
import { store } from ".";

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
