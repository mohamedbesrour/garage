const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signup > inscription
const postInscription = async (req, res) => {
  const { email, password } = req.body; // password au lieu de hashed_password
  const salt = bcrypt.genSaltSync(10);
  const HashedPassword = bcrypt.hashSync(password, salt);

  try {
    const signUp = await pool.query(
      `INSERT INTO users (email, password) VALUES($1, $2)`,
      [email, HashedPassword]
    );

    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });

    res.status(200).json({ signUp }); // token
  } catch (err) {
    console.error(err);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
};

// login >  connexion
const postConnexion = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (!users.rows.length)
      return res.json({ detail: "Cette utilisateur existe pas" });

    const sucess = await bcrypt.compare(password, users.rows[0].password);
    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });

    if (sucess) {
      res.json({ email: users.rows[0].email, token });
    } else {
      res.json({ detail: "Login failed" });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = { postInscription, postConnexion };
