import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/scss/style.scss";

import LandingPage from "./Views/LandingPage.jsx";
import AboutUs from "./Views/AboutUs";
import Info from "./Views/Info";
import NotFound from "./Views/NotFound";

import BaseLayout from "./layouts/BaseLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/info/:id/:animal/" element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
