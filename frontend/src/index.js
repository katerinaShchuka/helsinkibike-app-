import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CustomProvider } from "rsuite";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomProvider theme="dark">
        <App />
      </CustomProvider>
    </BrowserRouter>
  </React.StrictMode>
);
