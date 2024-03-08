const pool = require("../db");


// -------------------------------- //
// -------CRUD - COMMENTAIRE------- //
//--------------------------------- //

// Crée un nouveau commentaire dans la base de données
const postCommentaire = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO commentaire (description) VALUES($1) RETURNING *",
      //insérer INTO nomDeTable (nomDeColone)
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

//get all todos  --selectionne tous commentaire
const getCommentaire = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM commentaire");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// Récupère un commentaire spécifique en fonction de son ID
const getIdCommentaire = async (req, res) => {
  try {
    // Extraction de l'ID du commentaire depuis la requête
    const { id } = req.params;
    // Requête SQL sélectionne un commentaire en fonction de son ID
    const todo = await pool.query(
      "SELECT * FROM commentaire WHERE commentaire_id = $1",
      [id]
    );
    // Envoi de la réponse JSON contenant le commentaire trouvé
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// Met à jour un commentaire en fonction de son ID
const putCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE commentaire SET description = $1 WHERE commentaire_id = $2",
      [description, id]
    );
    res.json("Commentaire mis à jour");
  } catch (err) {
    console.error(err.message);
  }
};

// Supprime un commentaire en fonction de son ID

const deleteCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM commentaire WHERE commentaire_id = $1",
      [id]
    );
    res.json("Commentaire supprimé !");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { postCommentaire, getCommentaire, getIdCommentaire, putCommentaire, deleteCommentaire };