const authController = require("../controller/crud-auth");
const { Router } = require("express");

const router = Router();

//Pour l'authentification
router.post("/signup", authController.postInscription);
router.post("/login", authController.postConnexion);

module.exports = router;
