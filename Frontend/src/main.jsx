import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Info from "./pages/Info/Info.jsx";

import Layout from "./components/Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/info/:person/:module" element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
