const authAdminController = require("../controller/crud-auth-admin");
const { Router } = require("express");

const router = Router();

//Pour l'authentification
router.post("/signup", authAdminController.postAdminInscription);
router.post("/login", authAdminController.postAdminConnexion);

module.exports = router;
