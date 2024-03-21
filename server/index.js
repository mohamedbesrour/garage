const PORT = process.env.PORT ?? 5000;
const express = require("express");
const cors = require("cors"); //middleware qui permet de gérer les autorisations de domaine croisé pour les requêtes,
const bodyParser = require("body-parser");// pour la connexion employé
// const jwt = require("jsonwebtoken");//Sécurité
const app = express();

//use = middleware  fonctions qui traiter les requêtes HTTP req, res
app.use(cors());
app.use(express.json()); //req.body
app.use(bodyParser.json());

// pour la gestion des routes
const routeCommentaire = require("./route/route-commentaire");
const routeVoiture = require("./route/route-voiture");
const routeConnexion = require("./route/route-connexion");
const routeAuth = require("./route/route-auth");
const routeAuthAdmin = require("./route/route-auth-admin");
const routefiltre = require("./route/route-filtre");

app.use("/commentaire", routeCommentaire);
app.use("/voiture", routeVoiture);
app.use("/connexion", routeConnexion);
app.use("/auth", routeAuth);
app.use("/auth-admin", routeAuthAdmin);
app.use("/filtre", routefiltre)

app.listen(PORT, () => {
  console.log(`le serveur a démarré sur le port ${PORT}`);
});
