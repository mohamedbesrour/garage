import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import InputVoiture from "../components/InputVoiture";
import ListVoiture from "../components/ListVoiture";

import InputUser from "../components/InputUser";
import ListUsers from "../components/ListUsers";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/authContext";

export default function Admin() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(); // Utilisez la syntaxe correcte pour obtenir la fonction removeCookie

  const { isConnect } = useContext(AuthContext);//supp cookies logout

  const signOut = () => {
    try {
      console.log("signout");
      removeCookie("Email");
      removeCookie("access_token");
      removeCookie("AuthToken");
      navigate("/"); // Déplacez la navigation après la suppression des cookies
      window.location.reload();
    } catch (err) {
      console.log("error : ");
      console.log(err);
    }
  };
  if (isConnect) {
    return (
      <div>
        admin
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
        <InputVoiture />
        Voiture disponible
        <ListVoiture />
        connexion
        <InputUser />
        Liste des utilisateurs
        <ListUsers />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
