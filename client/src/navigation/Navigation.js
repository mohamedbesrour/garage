import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar.js";
import Home from "../pages/home.js";
import Services from "../pages/services.js";
import Vente from "../pages/vente.js";
import Connexion from "../pages/connexion.js";
import Auth from "../context/Auth.js";
import AuthAdmin from "../context/AuthAdmin.js";
import Employe from "../pages/employe.js";
import Admin from "../pages/admin.js";
import Modal from "../components/Modal.js"
import Error from "../pages/error.js";


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
          <Route path="/connexion" element={<Connexion />} />

          <Route path="/auth-employe" element={<Auth />} />
          <Route path="/auth-admin" element={<AuthAdmin />} />

          <Route path="/employe" element={<Employe />} />
          <Route path="/admin" element={<Admin />} />
          
          <Route path="/modal" element={<Modal />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
