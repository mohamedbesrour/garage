import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const isConnect = document.cookie;
console.log(isConnect)
  //   const logout = () => {
  //     // deconnecte en suppriment les cookie AuthToken dans inspecter/Application/Cookies
  //     console.log("logout");
  //     removeCookie("Email");
  //     removeCookie("AuthToken");
  //     window.location.reload();
  //   };

  return (
    <AuthContext.Provider value={{ isConnect }}>
      {children}
    </AuthContext.Provider>
  );
};