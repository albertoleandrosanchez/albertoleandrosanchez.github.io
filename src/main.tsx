import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilDevTools forceSerialize={false} />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
