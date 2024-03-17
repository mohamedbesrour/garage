// import React, { useState } from "react";
// import "../style/cardVoiture.css";

// const CarCard = ({ car }) => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const ouvrirModal = () => {
//     setModalOpen(true);
//   };

//   const fermerModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div className="car-card">
//         <div className="car-image" onClick={ouvrirModal}>
//           <img src={car.img} alt={car.modele} />
//         </div>
//         <div className="car-details">
//           <h2>{car.modele}</h2>
//           <p>Année : {car.annee}</p>
//           <p>Kilométrage : {car.kilometrage} km</p>
//           <p>Prix : {car.prix} €</p>
//         </div>
//       </div>

//       {/* Modal */}
//       {modalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={fermerModal}>&times;</span>
//             <img src={car.img} alt={car.modele} />
//             <div className="car-details">
//               <h2>{car.modele}</h2>
//               <p>Année : {car.annee}</p>
//               <p>Kilométrage : {car.kilometrage} km</p>
//               <p>Prix : {car.prix} €</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CarCard;