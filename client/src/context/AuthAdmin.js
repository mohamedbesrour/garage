import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "../style/auth.css";

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogIn, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null); //stocke les valeurs des champs de formulaire
  const [password, setPassword] = useState(null); //stocke les valeurs ...
  const [confirmPassword, setConfirmPassword] = useState(null); //stocke les valeurs ...
  const [error, setError] = useState(null); //affiche msg d'erreur

  // console.log(cookies)

  //Change le statut connexion ou inscription et reinitialise les msg erreur
  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut
    if (!isLogIn && password !== confirmPassword) {
      // Vérifie si les mots de passe correspondent dans s'inscrire
      setError("Le mot de passe ne correspond pas");
      return;
    }

// Validation de l'email avec une expression régulière
const emailRegex = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;  //lettres avant "@" lettres entre "." lettres après.
if (!emailRegex.test(email)) {
  setError("Veuillez saisir une adresse e-mail valide.");
  return;
}

    // Effectue une requête POST vers le serveur avec les informations d'authentification
    const response = await fetch(
      `${process.env.REACT_APP_SERVERURLACCESS}/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // En-têtes de la requête
        body: JSON.stringify({ email, password }), // Corps de la requête (données au format JSON)
      }
    );

    const data = await response.json(); // Convertit la réponse en format JSON
    // console.log(data)
    if (data.detail) {
      // Vérifie s'il y a une erreur dans la réponse
      setError(data.detail); // Définit un message d'erreur
    } else {
      // Si aucune erreur n'est retournée
      // Définit les cookies d'email et de jeton d'authentification avec les données de réponse
      setCookie("Email", data.email);
      setCookie("AuthToken", data.token);
      // Recharge la page pour appliquer les changements (par exemple, rediriger l'utilisateur connecté)
      window.location.href = "http://localhost:3000/admin";
      // window.location.reload();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogIn ? "Connectez-vous" : "Inscrivez-vous"}</h2>
          <input
            type="texte"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogIn && (
            <input
              type="password"
              placeholder="confirmé mot de passe"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) => handleSubmit(e, isLogIn ? "login" : "signup")}
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogIn
                ? "rgb(188, 188, 188)"
                : "rgb(255, 255, 255)",
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: isLogIn
                ? "rgb(188, 188, 188)"
                : "rgb(255, 255, 255)",
            }}
          >
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
