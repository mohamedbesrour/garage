const Controller = require("../controller/crud-commentaire");
const { Router } = require("express");

const router = Router();

//Pour la section commentaire
router.post("/todos", Controller.postCommentaire);
router.get("/todos", Controller.getCommentaire);
router.get("/todos/:id", Controller.getIdCommentaire);
router.put("/todos/:id", Controller.putCommentaire);
router.delete("/todos/:id", Controller.deleteCommentaire);

module.exports = router;