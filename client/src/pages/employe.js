import React from "react";
import { useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
//components
import InputTodo from "../components/InputTodo"
import ListTodos from "../components/ListTodos";

export default function Employe() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(null) //pour la déconnexion
  console.log(cookies) // pour voir la disparition des cookies après la déconnexion
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
}
