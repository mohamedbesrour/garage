import React from 'react'
import "../style/cardVoiture.css";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.img} alt={car.modele} />
      </div>
      <div className="car-details">
        <h2>{car.modele}</h2>
        <p>Année : {car.annee}</p>
        <p>Kilométrage : {car.kilometrage} km</p>
        <p>Prix : {car.prix} €</p>
      </div>
    </div>
  );
};

export default CarCard;
