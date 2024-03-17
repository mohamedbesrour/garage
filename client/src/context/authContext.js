import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const isConnect = document.cookie;
  // console.log(isConnect);

  return (
    <AuthContext.Provider value={{ isConnect }}>
      {children}
    </AuthContext.Provider>
  );
};
