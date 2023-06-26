import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './Views/LandingPage.jsx'
import AboutUs from "./Views/AboutUs.jsx";
import Items from './Views/Items.jsx';

import Navbar from './Components/Navbar.jsx';

import "./assets/scss/style.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navbar/> }>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/info" element={<AboutUs />}/>
          <Route path="/items/:id/:allat/:miteszik" element={<Items />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
