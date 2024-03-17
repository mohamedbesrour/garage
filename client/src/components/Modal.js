import React, { useState } from "react";
import "../style/outils/modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modalCard">
        Open
      </button>

      {modal && (
        <div className="modalCard">
          <div onClick={toggleModal} className="overlayCard"></div>
          <div className="modalCard-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modalCard" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>Lorem ipsum dolor uri nihil quibusdam, labore eius nam. Iure, repellendus! Voluptates eveniet, doloribus voluptatibus enim non rerum </p>
    </>
  );
}