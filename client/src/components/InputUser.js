import React, { Fragment, useState } from "react";

const InputUser = () => {
  const [formData, setFormData] = useState({
    role: "",
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const { role, nom, prenom, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { role, nom, prenom, email, password };
      const response = await fetch("http://localhost:5000/connexion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Ajouter un employé</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          name="role"
          value={role}
          onChange={onChange}
          placeholder="Admin ou Users"
        />
        <input
          type="text"
          className="form-control"
          name="nom"
          value={nom}
          onChange={onChange}
          placeholder="Nom de l'employé"
        />
        <input
          type="text"
          className="form-control"
          name="prenom"
          value={prenom}
          onChange={onChange}
          placeholder="Prénom de l'employé"
        />
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="email"
        />
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="mot de passe"
        />
        <button className="btn btn-success">Enregistré</button>
      </form>
    </Fragment>
  );
};

export default InputUser;