const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// -------------------------------- //
// -------CRUD - CONNEXION--------- //
//--------------------------------- //

const postConnexion = async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
      const { role, nom, prenom, email } = req.body;
  
      const newConnexion = await pool.query(
        "INSERT INTO connexion (role, nom, prenom, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *", //insérer INTO nomDeTable (nomDeColone)
        [role, nom, prenom, email, hash]
      );
  
      res.json(newConnexion.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

const getConnexion = async (req, res) => {
    try {
      const allConnexion = await pool.query("SELECT * FROM connexion");
      res.json(allConnexion.rows);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //oneUser == todo   --utilisateur en particulier
  const getIdConnexion = async (req, res) => {
    try {
      const { id } = req.params;
      const oneUser = await pool.query(
        "SELECT * FROM connexion WHERE user_id = $1",
        [id]
      );
      res.json(oneUser.rows[0]);
    } catch (error) {
      console.error(err.message);
    }
  };
  
  //updateUser = updateTodo
  const putConnexion = async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
      const { id } = req.params;
      const { role, nom, prenom, email } = req.body;
  
      const updateUser = await pool.query(
        "UPDATE connexion SET role = $1, nom = $2, prenom = $3, email = $4, password = $5 WHERE user_id = $6",
        [role, nom, prenom, email, hash, id]
      );
  
      res.json("Utilisateur mis à jour");
    } catch (err) {
      console.error(err.message);
    }
  };
  
  //deleteUser = delete
  const deleteConnexion = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUser = await pool.query(
        "DELETE FROM connexion WHERE user_id = $1",
        [id]
      );
      res.json("Utilisateur supprimé !");
    } catch (err) {
      console.log(err.message);
    }
  };

module.exports = { postConnexion, getConnexion, getIdConnexion, putConnexion, deleteConnexion };