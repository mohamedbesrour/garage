import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/admin", inputs);
    setCurrentUser(res.data);
  };
  //   const logout = () => {
  //     // deconnecte en suppriment les cookie AuthToken dans inspecter/Application/Cookies
  //     console.log("logout");
  //     removeCookie("Email");
  //     removeCookie("AuthToken");
  //     window.location.reload();
  //   };


//   const logout = async () => {
//     console.log("entrée fonction logout");
//     try {
//       const res = await axios.post("http://localhost:5000/logout");
//     } catch (err) {
//       console.log("error de logout");
//     }
//     setCurrentUser(null);
//     console.log("je logout");
//   };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
{
  /* <AuthContext.Provider value={{ currentUser,  }}> {children}</AuthContext.Provider > */
}
