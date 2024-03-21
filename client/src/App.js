import React, { Fragment } from "react";
import { AuthContextProvider } from "./context/authContext";
import Navigation from "./navigation/Navigation";
import Footer from "./navigation/Footer"

function App() {
  return (
    <>
      <AuthContextProvider>
        <Fragment>
          <Navigation />
          <Footer />
        </Fragment>
      </AuthContextProvider>
    </>
  );
}

export default App;
