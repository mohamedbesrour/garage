import React, { Fragment, useEffect, useState } from "react";
import "../style/vente.css";
import "../style/outils/police.css";
// import CarCard from "../components/CarCard";
// import Modal from "../components/Modal"

export default function Vente() {
  const [voitures, setVoitures] = useState([]);
  const [recherche, setRecherche] = useState({ kilometrage: "", prix: "" });
  const [resultat, setResultat] = useState([]);
  const [error, setError] = useState(null); // Ajout d'un état pour stocker les erreurs

  const getVoitures = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/voiture/voiture`
      );
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des voitures');
      }
      const jsonData = await response.json();
      setVoitures(jsonData);
    } catch (err) {
      console.error(err.message);
      setError(err); // Définir l'erreur dans l'état d'erreur
    }
  };

  useEffect(() => {
    getVoitures();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecherche({ ...recherche, [name]: value });
  };

  const handleSearch = () => {
    const { kilometrage, prix } = recherche;
    const filteredVoitures = voitures.filter((voiture) => {
      // Vérifiez si le champ est vide ou non
      return (
        (!kilometrage || parseInt(voiture.kilometrage) < parseInt(kilometrage)) &&
        (!prix || parseInt(voiture.prix) < parseInt(prix))
      );
    });
    setResultat(filteredVoitures);
  };

  if (error) {
    return <div>Erreur: {error.message}</div>; // Afficher l'erreur si elle se produit
  }

  return (
<Fragment>
  <h1 className="h1Services">
    Découvrez notre sélection de véhicules d'occasion
  </h1>
  <div className="pageVente">
    <div className="filters">
      <input
        type="range"
        name="kilometrage"
        min="0"
        max="200000"
        value={recherche.kilometrage}
        onChange={handleChange}
      />
      <input
        type="text"
        name="prix"
        value={recherche.prix}
        onChange={handleChange}
        placeholder="Prix maximum"
      />
      <button onClick={handleSearch}>Filtrer</button>
    </div>
    <div className="car10-grid">
      {resultat.length > 0
        ? resultat.map((voiture) => (
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
          ))
        : voitures.map((voiture) => (
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
</Fragment>
  );
}
















// import React, { Fragment, useEffect, useState } from "react";
// // import CarCard from "../components/CarCard";

// // import Modal from "../components/Modal"
// import "../style/vente.css";

// export default function Vente() {
//   const [voitures, setVoitures] = useState([]);
//   const [recherche, setRecherche] = useState([]);
//   const [resultat, setResultat] = useState([]);


//   // pour lister tout les commentaires
//   const getVoitures = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_SERVERURL}/voiture/voiture`
//       );
//       const jsonData = await response.json(); //await pour dire d'attendre

//       setVoitures(jsonData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   useEffect(() => {
//     getVoitures();
//   }, []);

//   return (
//     <Fragment>
//       <h3 className="footer-title">
//         Découvrez notre sélection de véhicules d'occasion
//       </h3>
//       <div className="pageVente">
//         <div className="carte"></div>
//         <div className="carte"></div>
//         <div className="carte"></div>

//         <div className="car10-grid">
//           {voitures.map((voiture) => (
//             <div className="car10-card" key={voiture.voiture_id}>
//               <div className="car10-image">
//                 <img src={voiture.img} alt="photo" />
//               </div>
//               <div className="car10-info">
//                 <h2>{voiture.modele}</h2>
//                 <p>Année : {voiture.annee}</p>
//                 <p>Kilométrage : {voiture.kilometrage}</p>
//                 <p>Prix : {voiture.prix}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Fragment>
//   );
// }
