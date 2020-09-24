import React from "react";
import Modal from "react-modal";
import { AppRouter } from "./routers/AppRouter";

Modal.setAppElement("#root");
export const App = () => {
  return (
    <React.Fragment>
      <AppRouter />
      <h1>Frontend Roompali</h1>
    </React.Fragment>
  );
};
