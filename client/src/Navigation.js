import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";

import Home from "./pages/home";
import Services from "./pages/services";
import Vente from "./pages/vente.js";
import Connexion from "./pages/connexion";
import Employe from "./pages/employe.js";
import Admin from "./pages/admin";
import ApiMaps from "./components/ApiMaps.js";
import Error from "./pages/error";

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vente" element={<Vente />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
