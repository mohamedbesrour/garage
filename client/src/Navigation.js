import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";

import Home from "./pages/home";
import Connexion from "./pages/connexion";
import Services from "./pages/services";
import Avis from "./pages/avis";
import Admin from "./pages/admin";
import Error from "./pages/error";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/services" element={<Services />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
