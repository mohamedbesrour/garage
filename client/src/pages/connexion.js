import React, { useState } from "react";

export default function Connexion() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  function handleForm(event) {
    event.preventDefault();
    fetch("");
    console.log("Clicked");
  }
  return (
    <div>
      Espace réservé au personnel
      <form onSubmit={handleForm}>
        <label>User ID</label>
        <input
          type="text"
          name="userId"
          onChange={(e) => setUserId(e.target.value)}
        />{" "}
        <br /> {/*garde aussi en mémoire le mdp dans le useState*/}
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Login Form" />
      </form>
    </div>
  );
}
