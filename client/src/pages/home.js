import React, { Fragment, useEffect, useState } from "react";
import "../style/home.css";
import Footer from "../components/Footer";
import Banniere from "../image/banniereAuto.jpg";

import InputTodo from "../components/InputTodo";

export default function Home() {
  const [todos, setTodos] = useState([]);

  // pour lister tout les commentaires
  const getTodos = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/commentaire/todos`);
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
      <div className="banner"><img src={Banniere} alt="ImageRévision" class="img-banner" /></div>
        
        Home
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
