import React from "react";
import "../style/outils/error.css";
import errorPage from "../image/errorPage.png";
export default function Error() {
  return (
    <div className="bloc-error">
      <img src={errorPage} alt="Erreur" className="centered-image" />
    </div>
  );
}