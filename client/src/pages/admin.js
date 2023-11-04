import React from "react";

import InputVoiture from "../components/InputVoiture";
import ListVoiture from "../components/ListVoiture";

import InputUser from "../components/InputUser";
import ListUsers from "../components/ListUsers";

export default function Admin() {
  return (
    <div>
      admin
      <InputVoiture />
      resultat
      <ListVoiture />
      connexion
      <InputUser />
      resultat
      <ListUsers />
    </div>
  );
}
