import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const isConnect = document.cookie;
  // Pour la connexion des employés

  return (
    <AuthContext.Provider value={{ isConnect }}>
      {children}
    </AuthContext.Provider>
  );
};