import React, { Fragment, useState } from "react";

const EditVoiture = ({ voiture }) => {
  const [formData, setFormData] = useState({
    modele: voiture.modele,
    annee: voiture.annee,
    kilometrage: voiture.kilometrage,
    prix: voiture.prix,
    img: voiture.img,
  });

  // Fonction pour mettre à jour les champs
  const updateFields = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour mettre à jour le commentaire
  const updateComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/voiture/${voiture.voiture_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      window.location = "/";
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
        data-target={`#id${voiture.voiture_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${voiture.voiture_id}`}
        onClick={() => setFormData(voiture)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modifier la voiture</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setFormData(voiture)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                name="modele"
                value={formData.modele}
                onChange={updateFields}
              />
              <input
                type="text"
                className="form-control"
                name="annee"
                value={formData.annee}
                onChange={updateFields}
              />
              <input
                type="text"
                className="form-control"
                name="kilometrage"
                value={formData.kilometrage}
                onChange={updateFields}
              />
              <input
                type="text"
                className="form-control"
                name="prix"
                value={formData.prix}
                onChange={updateFields}
              />
              <input
                type="text"
                className="form-control"
                name="img"
                value={formData.img}
                onChange={updateFields}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateComment}
              >
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setFormData(voiture)}
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

export default EditVoiture;
