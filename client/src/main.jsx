import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Home from "./components/home-page/Home.jsx";
import WebPage from "./components/web-page/WebPage.jsx";
import AppPage from "./components/app-page/AppPage.jsx";
import "./resets.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/web-design" element={<WebPage />} />
          <Route path="/app-design" element={<AppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
