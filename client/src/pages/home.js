import React, { Fragment, useEffect, useState } from "react";
import "../style/home.css";
import Footer from "../navigation/Footer";
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
        <div className="containerHome">
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
              <img src={Image2} alt="Some description" />
            </div>
          </div>
        </div>
      </section>*/}

      <section>
        <article className="my-section">
          <div className="div1">
            <h3 className="footer-title">Nos Horaires d'ouverture</h3>
            <div className="hourly foot-bloc">
              <li className="hourly-li">lun : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="hourly-li">mar : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="hourly-li">mer : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="hourly-li">jeu : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="hourly-li">ven : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="hourly-li">sam : 08:45 - 12:00 | </li>
              <li className="hourly-li">dim : Fermé | </li>
            </div>
          </div>
          <div className="div2">Div 2</div>
        </article>

        <article className="my-section">
          <div className="div3">div3</div>{" "}
          <div className="div4">
            Div 4
            <InputTodo />
            <table className="table">
              <thead>
                {" "}
                <tr>
                  <th>Commentaire</th>
                </tr>{" "}
              </thead>
              <tbody>
                {todos.map((commentaire) => (
                  <tr key={commentaire.commentaire_id}>
                    {" "}
                    <td>{commentaire.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <div>
        <Footer />
      </div>
    </Fragment>
  );
}
