import React, { Fragment, useEffect, useState } from "react";

// import CarCard from "../components/CarCard";
import "../style/cardVoiture.css";

export default function Vente() {
  const [voitures, setVoitures] = useState([]);

  // pour supprimer une voiture

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
    </Fragment>
  );
}

// import React, { Fragment, useEffect, useState } from "react";

// import EditVoiture from "../components/EditVoiture";

// export default function Vente() {

//     const [voitures, setVoitures] = useState([]);

//     // pour supprimer une voiture
//     const deleteVoiture = async (id) => {
//       try {
//         const deleteVoiture = await fetch(`http://localhost:5000/voiture/${id}`, {
//           method: "DELETE",
//         });

//         setVoitures(voitures.filter((voiture) => voiture.voiture_id !== id)); // désaffiche le commentaire qui a été supprimé en interne
//       } catch (err) {
//         console.error(err.message);
//       }
//     };

//     // pour lister tout les commentaires
//     const getVoitures = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/voiture");
//         const jsonData = await response.json(); //await pour dire d'attendre

//         setVoitures(jsonData);
//       } catch (err) {
//         console.error(err.message);
//       }
//     };

//     useEffect(() => {
//       getVoitures();
//     }, []);

//   return (
//     <Fragment>
//     <table className="table">
//       <thead>
//         <tr>
//           <th>Commentaire</th>
//           <th>Champ 1</th>
//           <th>Champ 2</th>
//           <th>Champ 3</th>
//           <th>Champ 4</th>
//           <th>Champ 5</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {voitures.map((voiture) => (
//           <tr key={voiture.voiture_id}>
//             <td>{voiture.modele}</td>
//             <td>{voiture.annee}</td>
//             <td>{voiture.kilometrage}</td>
//             <td>{voiture.prix}</td>
//             <td>
//               <img src={voiture.img} alt="photoo" />
//             </td>

//             <td>
//               <EditVoiture voiture={voiture} />
//             </td>
//             <td>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => deleteVoiture(voiture.voiture_id)}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </Fragment>
//   )
// }
