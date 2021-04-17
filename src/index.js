import { StrictMode } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
