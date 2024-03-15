import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//authentification
// import { Provider } from 'react-redux';
import { AuthContextProvider } from './context/authContext.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
