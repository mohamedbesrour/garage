const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// -------------------------------- //
// --------CRUD - VOITURE---------- //
//--------------------------------- //

const postVoiture = async (req, res) => {
    try {
      const { modele, annee, kilometrage, prix, img } = req.body;
  
      const newVoiture = await pool.query(
        "INSERT INTO voiture (modele, annee, kilometrage, prix, img) VALUES($1, $2, $3, $4, $5) RETURNING *", //insérer INTO nomDeTable (nomDeColone)
        [modele, annee, kilometrage, prix, img]
      );
  
      res.json(newVoiture.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //get all todos  --selectionne toute les voitures
  const getVoiture = async (req, res) => {
    try {
      const allVoiture = await pool.query("SELECT * FROM voiture");
      res.json(allVoiture.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //oneVoiture == todo   --voiture en particulier
  const getIdVoiture = async (req, res) => {
    try {
      const { id } = req.params;
      const oneVoiture = await pool.query(
        "SELECT * FROM voiture WHERE voiture_id = $1",
        [id]
      );
  
      res.json(oneVoiture.rows[0]);
    } catch (error) {
      console.error(err.message);
    }
  };
  
  //updateVoiture = updateTodo
  const putVoiture = async (req, res) => {
    try {
      const { id } = req.params;
      const { modele, annee, kilometrage, prix, img } = req.body;
  
      const updateVoiture = await pool.query(
        "UPDATE voiture SET modele = $1, annee = $2, kilometrage = $3, prix = $4, img = $5 WHERE voiture_id = $6",
        [modele, annee, kilometrage, prix, img, id]
      );
  
      res.json("Voiture mis à jour");
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //deleteTodo = deleteVoiture
  const deleteVoiture = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteVoiture = await pool.query(
        "DELETE FROM voiture WHERE voiture_id = $1",
        [id]
      );
      res.json("Voiture supprimé !");
    } catch (err) {
      console.log(err.message);
    }
  };

  module.exports = { postVoiture, getVoiture, getIdVoiture, putVoiture, deleteVoiture };