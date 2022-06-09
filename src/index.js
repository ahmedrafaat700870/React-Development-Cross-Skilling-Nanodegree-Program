import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./store/Store";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
