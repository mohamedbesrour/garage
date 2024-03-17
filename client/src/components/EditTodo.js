import React, { Fragment, useState } from "react";

const EditTodo = ({ commentaire }) => {
    // État local pour stocker les données du formulaire
  const [description, setDescription] = useState(commentaire.description);

  //Edit description function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/commentaire/todos/${commentaire.commentaire_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      // window.location = "/employe";
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
        data-target={`#id${commentaire.commentaire_id}`}
      >
        Edit
      </button>

      {/* id = id10    pour rendre le modal unique*/}
      <div
        className="modal"
        id={`id${commentaire.commentaire_id}`}
        onClick={() => setDescription(commentaire.description)} //modifie sur la même ligne
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">modifier le commentaire</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(commentaire.description)} //modifie sur la même ligne
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Modifier
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(commentaire.description)} //modifie sur la même ligne
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

export default EditTodo;
