// import React, { Fragment, useEffect, useState } from "react";

// const ListVoiture = () => {

// return <div>ListVoiture</div>;
// };

// export default ListVoiture;

import React, { Fragment, useEffect, useState } from "react";

import EditVoiture from "./EditVoiture";

const ListVoitures = () => {
  const [voitures, setVoitures] = useState([]);

  // pour supprimer une voiture
  const deleteVoiture = async (id) => {
    try {
      const deleteVoiture = await fetch(`http://localhost:5000/voiture/${id}`, {
        method: "DELETE",
      });

      setVoitures(voitures.filter((voiture) => voiture.voiture_id !== id)); // désaffiche le commentaire qui a été supprimé en interne
    } catch (err) {
      console.error(err.message);
    }
  };

  // pour lister tout les commentaires
  const getVoitures = async () => {
    try {
      const response = await fetch("http://localhost:5000/voiture");
      const jsonData = await response.json(); //await pour dire d'attendre

      setVoitures(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getVoitures();
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Modèle</th>
            <th>Année</th>
            <th>Kilométrage</th>
            <th>Montant</th>
            <th>URL image</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map((voiture) => (
            <tr key={voiture.voiture_id}>
              <td>{voiture.modele}</td>
              <td>{voiture.annee}</td>
              <td>{voiture.kilometrage}</td>
              <td>{voiture.prix}</td>
              <td>{voiture.img}</td>
              {/* <td>
                <img src={voiture.img} alt="photoo" />
              </td> */}

              <td>
                <EditVoiture voiture={voiture} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteVoiture(voiture.voiture_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListVoitures;
