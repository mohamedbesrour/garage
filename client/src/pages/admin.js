import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import InputVoiture from "../components/InputVoiture";
import ListVoiture from "../components/ListVoiture";

import InputUser from "../components/InputUser";
import ListUsers from "../components/ListUsers";
import { AuthContext} from "../context/authContext";
import { useCookies} from 'react-cookie'

export default function Admin() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(null) //pour la déconnexion

  const signOut = () => {  // deconnecte en suppriment les cookie AuthToken dans inspecter/Application/Cookies
    try {
      navigate("/");
    } catch (err) {
      console.log("error : ");
      console.log(err);
    }
    
    console.log('signout')
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()
  }

  // const signOut = async () => {
  //   try {
  //     navigate("/");
  //   } catch (err) {
  //     console.log("error : ");
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      admin
      {/* <button className="signout" onClick={signOut}>
        SIGN OUT
      </button> */}
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
}
