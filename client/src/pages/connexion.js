 import React, { useState } from "react"; //
import { useNavigate } from "react-router-dom";
// import ReactDOM from "react";
import "../style/styleLogin.css";

// import axios from "axios";
// import { AuthContext } from "../context/authContext";

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
  }

  // pour le changement du return() afficher dans la page
  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-container">
          <div
            className={
              "controller" +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Employé
          </div>
          <div
            className={
              "controller" +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Admin
          </div>
        </div>
        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div>
    );
  }
}
export default Log;
// ---------
// --------- bloc return 1 EMPLOYE
// ---------
function LoginBox() {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      email: email,
      password: password,
    };
    fetch(`${process.env.REACT_APP_SERVERURL}/connexion/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        navigate("/employe");
      });
  }
  

  return (
    <div className="inner-container">
      <div className="header">Employé</div>
      <div className="box">
        Espace réservé au personnel
        <form onSubmit={handleForm}>
          <label>Email</label>
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
    </div>
  );
}

// ---------
// --------- bloc return 2 ADMIN
// ---------
function RegisterBox() {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      email: email,
      password: password,
    };
    fetch(`${process.env.REACT_APP_SERVERURL}/connexion/login`, {
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
    <div className="inner-container">
      <div className="header">Admin</div>
      <div className="box">
        Espace réservé a l'admin
        <form onSubmit={handleForm}>
          <label>Email</label>
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
    </div>
  );
}




// export default function Connexion() {
//   const [email, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   function handleForm(event) {
//     event.preventDefault();
//     let userData = {
//       email: email,
//       password: password,
//     };
//     fetch("http://localhost:5000/connexion/login", {
//       method: "post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         navigate("/admin");
//       });
//   }

//   return (
//     <div>
//       Espace réservé au personnel
//       <form onSubmit={handleForm}>
//         <label>User ID</label>
//         <input
//           type="email"
//           name="email"
//           onChange={(e) => setEmailId(e.target.value)}
//         />
//         <br />
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <input type="submit" value="Login Form" />
//       </form>
//     </div>
//   );
// }
