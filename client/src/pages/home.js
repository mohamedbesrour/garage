import React, { Fragment, useEffect, useState } from "react";
import "../style/home.css";
import Footer from "../components/Footer";
import Banniere from "../image/banniereGarageAuto.jpg";

import InputTodo from "../components/InputTodo";

export default function Home() {
  const [todos, setTodos] = useState([]);

  // pour lister tout les commentaires
  const getTodos = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/commentaire/todos`
      );
      const jsonData = await response.json(); //await pour dire d'attendre

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="banner">
        <img src={Banniere} alt="ImageRévision" className="img-banner" />
      </div>

      <div className="titrePolice">
        <h1>AutoPro Garage</h1>
      </div>

{/* <section>
<div className="container">
          <div className="form-container">
            <div className="right-container">
              <div className="left-inner-container">
                <Text
                  cName="actu"
                  text="Qui sommes nous ?"
                  text2="Chez Connectify, nous sommes une plateforme sociale dynamique
                et inclusive, dédiée à connecter les individus du monde
                entier.
                Notre objectif est de créer un espace numérique où chacun peut
                se sentir libre d'exprimer sa véritable identité, de partager
                ses passions et de tisser des liens authentiques."
                />
              </div>
            </div>

            <div className="left-container">
              <img src={Image2} />
            </div>
          </div>
        </div>
</section> */}

      <InputTodo />
      <table className="table">
        <thead>
          <tr>
            <th>Commentaire</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((commentaire) => (
            <tr key={commentaire.commentaire_id}>
              <td>{commentaire.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <Footer />
      </div>
    </Fragment>
  );
}
