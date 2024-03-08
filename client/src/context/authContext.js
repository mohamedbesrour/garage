import { createContext } from "react";
import { useState, useEffect } from "react";
// import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    // const login = async (inputs) => {
    //     const res = await axios.post("/login", inputs);
    //     setCurrentUser(res.data)
    // }

    // const logout = async (inputs) => {
    //     const res = await axios.post("/logout");
    //     setCurrentUser(null)
    //     console.log(res.data);
    // }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser }}> {children}</AuthContext.Provider >
        
    )
} 
{/* <AuthContext.Provider value={{ currentUser, login, logout }}> {children}</AuthContext.Provider > */}
