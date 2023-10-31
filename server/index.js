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

app.listen(5000, () => {
  console.log("le serveur a démarré sur le port 5000");
});
