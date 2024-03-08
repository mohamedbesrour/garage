const PORT = process.env.PORT ?? 5000;
const express = require("express");
const cors = require("cors"); //middleware qui permet de gérer les autorisations de domaine croisé pour les requêtes,
const bodyParser = require("body-parser");// pour la connexion employé
const jwt = require("jsonwebtoken");//Sécurité
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
app.use("/commentaire", routeCommentaire);
app.use("/voiture", routeVoiture);
app.use("/connexion", routeConnexion);
app.use("/auth", routeAuth);

//  formulaire de connexion admin - employe
app.post("/connexion/login", (req, res) => {
  const user = { id: 3 };
  const token = jwt.sign({ user }, "my_secret_key");
  res.json({ token: token });
  const { email, password } = req.body;
  if (email == "m.besrour@yahoo.com" && password == "root") {
    console.log("Utilisateur valide");
  } else {
    console.log("Utilisateur non valide");
  }
  res.json({ message: "Formulaire soumis" });
});

app.listen(PORT, () => {
  console.log(`le serveur a démarré sur le port ${PORT}`);
});
