import React, { Fragment, useState } from "react";

const EditUser = ({ connexion }) => {
    // État local pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    role: connexion.role,
    nom: connexion.nom,
    prenom: connexion.prenom,
    email: connexion.email,
    password: connexion.password,
  });

  // Fonction pour mettre à jour les champs
  const updateFields = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour mettre à jour le commentaire
  const updateEmploye = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/connexion/${connexion.user_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${connexion.user_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${connexion.user_id}`}
        onClick={() => setFormData(connexion)} //voiture
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modifier l utilisateur</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setFormData(connexion)} //voiture
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                name="role"
                value={formData.role}
                onChange={updateFields}
              />
              <input
                type="text"
                className="form-control"
                name="nom"
                value={formData.nom}
                onChange={updateFields}
              />
              <input
                type="text"
                className="form-control"
                name="prenom"
                value={formData.prenom}
                onChange={updateFields}
              />
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={updateFields}
              />
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={updateFields}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateEmploye}
              >
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFormData(connexion)} //voiture
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditUser;
