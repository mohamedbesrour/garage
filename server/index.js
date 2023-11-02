const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); //pool execute des requete avec postgres

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO commentaire (description) VALUES($1) RETURNING *", //insérer INTO nomDeTable (nomDeColone)
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos  --selectionne tous commentaire

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM commentaire");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo   --commentaire en particulier

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
      "SELECT * FROM commentaire WHERE commentaire_id = $1",
      [id]
    );

    res.json(todo.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
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
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
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
});

// -------------------------------- //
// --------CRUD - VOITURE---------- //
//--------------------------------- //

app.post("/voiture", async (req, res) => {
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
});
//get all todos  --selectionne toute les voitures
app.get("/voiture", async (req, res) => {
  try {
    const allVoiture = await pool.query("SELECT * FROM voiture");
    res.json(allVoiture.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//oneVoiture == todo   --voiture en particulier
app.get("/voiture/:id", async (req, res) => {
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
});

//updateVoiture = updateTodo
app.put("/voiture/:id", async (req, res) => {
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
});

//deleteTodo = deleteVoiture
app.delete("/voiture/:id", async (req, res) => {
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
});

app.listen(5000, () => {
  console.log("le serveur a démarré sur le port 5000");
});
