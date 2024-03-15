import React, { Fragment } from "react";
import styled from "styled-components";

import Navigation from "./navigation/Navigation";
import { AuthContext, AuthContextProvider } from "./context/authContext";

const AppContainer = styled.div`
  // max-width: 1520px;
  // margin: 0 auto;
`;

function App() {
  return (
    <AuthContextProvider>
      <AppContainer>
        <Fragment>
          <div>
            <Navigation />
          </div>
        </Fragment>
      </AppContainer>
    </AuthContextProvider>
  );
}

export default App;
