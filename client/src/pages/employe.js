import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/authContext";

//style
import "../style/admin.css"

//components
import InputTodo from "../components/InputTodo";
import ListTodos from "../components/ListTodos";

export default function Employe() {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();

  const { isConnect } = useContext(AuthContext); //logout supp cookies

  const signOut = () => {
    // deconnecte en suppriment les cookie AuthToken dans inspecter/Application/Cookie

    try {
      console.log("signout");
      removeCookie("Email");
      removeCookie("access_token");
      removeCookie("AuthToken");
      removeCookie("_gid");
      removeCookie("_ga");
      navigate("/"); // Déplacez la navigation après la suppression des cookies
      window.location.reload();
    } catch (err) {
      console.log("error : ");
      console.log(err);
    }
  };

  if (isConnect) {
    return (
      <div className="pageEmploye">
        <button className="signout" onClick={signOut}>
          Déconnexion
        </button>
        <h1>Réserver aux personnels</h1>
        <InputTodo />
        <ListTodos />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
}
