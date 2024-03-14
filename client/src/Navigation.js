import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";

import Home from "./pages/home";
import Services from "./pages/services";
import Vente from "./pages/vente.js";
import Connexion from "./pages/connexion";
import Employe from "./pages/employe.js";
import Admin from "./pages/admin";
import Profil from "./pages/profil.js";
import Auth from "./context/Auth.js";
import AuthAdmin from "./context/AuthAdmin.js";
import Error from "./pages/error";
import { Cookies } from "react-cookie";

export default function Navigation() {
  const [cookie, setCookie] = useState(null);
  useEffect(() => {
    const getCookie = async () => {
      try {
        setCookie(document.cookie);
        // console.log(cookie);
      } catch (err) {
        console.log(err);
      }
    };
    getCookie();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vente" element={<Vente />} />

          <Route path="/auth-employe" element={<Auth />} />
          <Route path="/auth-admin" element={<AuthAdmin />} />

          <Route path="/connexion" element={<Connexion />} />

          <Route path="/profil" element={<Profil />} />
          <Route path="*" element={<Error />} />

          <Route path="/employe" element={<Employe />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
