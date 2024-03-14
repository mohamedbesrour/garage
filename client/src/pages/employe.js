import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/authContext";
//components
import InputTodo from "../components/InputTodo";
import ListTodos from "../components/ListTodos";

export default function Employe() {
  const navigate = useNavigate();
  // const { removeCookie } = useContext(useCookies); //pour la déconnexion
  // console.log(cookies); // pour voir la disparition des cookies après la déconnexion
  const [cookies, setCookie, removeCookie] = useCookies(); // Utilisez la syntaxe correcte pour obtenir la fonction removeCookie

  const { isConnect } = useContext(AuthContext); //supp cookies logout

  const signOut = () => {
    // deconnecte en suppriment les cookie AuthToken dans inspecter/Application/Cookie

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

if (isConnect){
  return (
    <div>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      avis
      <InputTodo />
      <ListTodos />
    </div>
  );

} else {
   return <Navigate to="/"/> 
  }
}
