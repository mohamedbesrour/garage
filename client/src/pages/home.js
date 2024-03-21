import React, { Fragment, useEffect, useState } from "react";
import "../style/home.css";
import Banniere from "../image/banniereGarageAuto.jpg";
import imageHome from "../image/mecanicien2.png";
import imageHome2 from "../image/mecanicien3.png";
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

            <div className="containerHoraire">
            <h3 className="titleHoraire">Nos Horaires d'ouverture</h3>
            <div className="blocHoraire">
              <li className="houre-li">lun : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="houre-li">mar : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="houre-li">mer : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="houre-li">jeu : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="houre-li">ven : 08:45 - 12:00 | 14:00 - 18:00</li>
              <li className="houre-li">sam : 08:45 - 12:00 | </li>
              <li className="houre-li">dim : Fermé | </li>
            </div>
            </div>

          </div>
          <div className="div2">
          <img src={imageHome} alt="ImageRévision" className="img-Home" />
          
          </div>
        </article>

        <article className="my-section">
          <div className="div3">
          <img src={imageHome2} alt="ImageRévision" className="img-Home2" />
          </div>
          <div className="div4">
            <InputTodo />
          </div>
        </article>
      </section>

      <div className="homeTableCommentaire">
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
      </div>
    </Fragment>
  );
}
