// import React, { useEffect, useState } from 'react'
// import { useCookies } from 'react-cookie';
// import Auth from "./components/Auth";
// import ListHeader from "./components/ListHeader";
// import ListItem from "./components/ListItem";

function profil() {
  // // Utilisation du hook useCookies pour accéder aux cookies
  // const [cookies, setCookie, removeCookie] = useCookies(null)
  // // Extraction des valeurs authToken et userEmail à partir des cookies
  // const authToken = cookies.AuthToken // si le jeton existe, permet la redirection vrs la page de liste
  // const userEmail = cookies.Email;  // const userEmail = "momoboss94@gmail.com";  m.besrour@yahoo.com
  // const [tasks, setTasks] = useState(null)

  // Fonction pour récupérer les données des tâches depuis le serveur
  //    const getData = async () => {
  //     try {
  // // Envoi d'une requête au serveur pour récupérer les données des tâches de l'utilisateur
  //       const response = await fetch(
  //         `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
  //       )
  //       // Conversion de la réponse en format JSON
  //       const json = await response.json()
  //       // Mise à jour de l'état tasks avec les données récupérées
  //       setTasks(json);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  // Utilisation du hook useEffect pour exécuter getData lors du rendu initial du composant
  // useEffect(() => {
  //   // Vérification si l'utilisateur est connecté (authToken existe)
  //   if (authToken) {
  //     getData();
  //   }
  // }, [])
  // console.log(tasks);

  // Tri des tâches par date
  // const sortedTasks = tasks?.sort(
  //   (a, b) => new Date(a.date) - new Date(b.date)
  // );

  return <div className="appProfils">profil 12</div>;
}

export default profil;












