import React, { Fragment, useEffect, useState } from "react";
// import CarCard from "../components/CarCard";
import Footer from "../navigation/Footer";
// import Modal from "../components/Modal"
import "../style/vente.css";

export default function Vente() {
  const [voitures, setVoitures] = useState([]);

  // pour lister tout les commentaires
  const getVoitures = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/voiture/voiture`
      );
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
      <h3 className="footer-title">
        Découvrez notre sélection de véhicules d'occasion
      </h3>
      <div className="pageVente">
        <div className="carte"></div>
        <div className="carte"></div>
        <div className="carte"></div>

        <div className="car10-grid">
          {voitures.map((voiture) => (
            <div className="car10-card" key={voiture.voiture_id}>
              <div className="car10-image">
                <img src={voiture.img} alt="photo" />
              </div>
              <div className="car10-info">
                <h2>{voiture.modele}</h2>
                <p>Année : {voiture.annee}</p>
                <p>Kilométrage : {voiture.kilometrage}</p>
                <p>Prix : {voiture.prix}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
