// import React, { useState, useEffect } from "react";
// import "../style/apiMaps.css";

// export default function ApiMaps() {
//   const [origin, setOrigin] = useState("");
//   const [map, setMap] = useState(null);
//   const [directionsService, setDirectionsService] = useState(null);
//   const [directionsDisplay, setDirectionsDisplay] = useState(null);

//   useEffect(() => {
//     initializeMap();
//   }, []);

//   // Initialise la carte et les services de direction
//   const initializeMap = () => {
//     const map = new window.google.maps.Map(document.getElementById("map"), {
//       zoom: 10,
//       center: { lat: 0, lng: 0 },
//     });

//     const directionsService = new window.google.maps.DirectionsService();
//     const directionsDisplay = new window.google.maps.DirectionsRenderer();

//     directionsDisplay.setMap(map);

//     setMap(map);
//     setDirectionsService(directionsService);
//     setDirectionsDisplay(directionsDisplay);
//   };

//   // Gère le calcul de l'itinéraire
//   const handleRouteCalculation = () => {
//     directionsService.route(
//       {
//         origin,
//         destination: "Los Angeles, CA", // Destination par défaut, remplacez par votre adresse cible
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           directionsDisplay.setDirections(result);
//         } else {
//           console.error(`Erreur de calcul d'itinéraire: ${status}`);
//         }
//       }
//     );
//   };

//   return (
//     <div>
//       <h1>Calcul d'itinéraire Google Maps</h1>
//       <input
//         type="text"
//         id="address-input"
//         placeholder="Entrez votre adresse de départ"
//         onChange={(e) => setOrigin(e.target.value)}
//       />
//       <button id="get-route-button" onClick={handleRouteCalculation}>
//         Obtenir l'itinéraire
//       </button>
//       <div id="map"></div>
//     </div>
//   );
// }
