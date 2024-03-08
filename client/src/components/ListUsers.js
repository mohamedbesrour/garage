import React, { Fragment, useEffect, useState } from "react";
// useState est utilisé pour gérer l'état local d'un composant
// useEffect est utilisé pour gérer les effets secondaires dans un composant,
// tels que les appels à des API, la mise à jour du DOM
import EditUser from "./EditUser";

const ListUsers = () => {
    // État local pour stocker les données du formulaire
  const [users, setUsers] = useState([]);

  // pour supprimer un commentaire
  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/connexion/connexion/${id}`, {
        method: "DELETE",
      });
      //                        -  voiture
      setUsers(users.filter((connexion) => connexion.user_id !== id)); // désaffiche le commentaire qui a été supprimé en interne
    } catch (err) {
      console.error(err.message);
    }
  };

  // pour lister tout les commentaires
  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/connexion/connexion");
      const jsonData = await response.json(); //await pour dire d'attendre

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Rôle</th>
            <th>nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Mot de passe</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (
              connexion //voitures.map  ((voiture))
            ) => (
              <tr key={connexion.user_id}>
                <td>{connexion.role}</td>
                <td>{connexion.nom}</td>
                <td>{connexion.prenom}</td>
                <td>{connexion.email}</td>
                <td>{connexion.password}</td>

                <td>
                  <EditUser connexion={connexion} /> {/* voiture = voiture */}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(connexion.user_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListUsers;
