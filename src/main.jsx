import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "../src/global.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
