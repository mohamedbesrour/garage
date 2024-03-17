import React, { Fragment } from "react";
import styled from "styled-components";

import Navigation from "./navigation/Navigation";
import { AuthContext, AuthContextProvider } from "./context/authContext";

// const AppContainer = styled.div`
//   // max-width: 1520px;
//   // margin: 0 auto;
// <AppContainer></AppContainer>
//   `;

function App() {
  return (
    <AuthContextProvider>
        <Fragment>
          <div>
            <Navigation />
          </div>
        </Fragment>
    </AuthContextProvider>
  );
}

export default App;
