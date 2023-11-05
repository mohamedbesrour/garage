import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      email: email,
      password: password,
    };
    fetch("http://localhost:5000/connexion/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        navigate("/admin");
      });
  }

  return (
    <div>
      Espace réservé au personnel
      <form onSubmit={handleForm}>
        <label>User ID</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmailId(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login Form" />
      </form>
    </div>
  );
}
