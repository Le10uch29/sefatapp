"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./app/page";
import { UserProvider } from "./Components/contex/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <Page />
    </UserProvider>
  </React.StrictMode>
);
