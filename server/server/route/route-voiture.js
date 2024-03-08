const carsController = require("../controller/crud-voiture");
const { Router } = require("express");

const router = Router();

//Pour la section voiture
router.post("/voiture", carsController.postVoiture);
router.get("/voiture", carsController.getVoiture);
router.get("/voiture/:id", carsController.getIdVoiture);
router.put("/voiture/:id", carsController.putVoiture);
router.delete("/voiture/:id", carsController.deleteVoiture);

module.exports = router;