const Controller = require("../controller/crud-connexion");
const { Router } = require("express");

const router = Router();

//Pour la section commentaire
router.post("/connexion", Controller.postConnexion);
router.get("/connexion", Controller.getConnexion);
router.get("/connexion/:id", Controller.getIdConnexion);
router.put("/connexion/:id", Controller.putConnexion);
router.delete("/connexion/:id", Controller.deleteConnexion);

module.exports = router;