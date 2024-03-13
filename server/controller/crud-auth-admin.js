const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signup > inscription
const postAdminInscription = async (req, res) => {
  const { email, password } = req.body; // password au lieu de hashed_password
  const salt = bcrypt.genSaltSync(10);
  const HashedPassword = bcrypt.hashSync(password, salt);

  try {
    const signUp = await pool.query(
      `INSERT INTO admin (email, password) VALUES($1, $2)`,
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
const postAdminConnexion = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await pool.query("SELECT * FROM admin WHERE email = $1", [
      email,
    ]);

    if (!users.rows.length)
      return res.json({ detail: "Cet admin existe pas" });

    const sucess = await bcrypt.compare(password, users.rows[0].password);
    const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });

    if (sucess) {
      return res.status(200).json({ email: users.rows[0].email, token });
    } else {
      return res.status(400).json({ detail: "Login failed" });
    }
  } catch (err) {
    console.error(err);
  }
};


module.exports = { postAdminInscription, postAdminConnexion };
