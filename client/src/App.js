import React, { Fragment } from "react";
import styled from "styled-components";
import "./App.css";

import Navigation from "./Navigation";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
 <AppContainer>
    <Fragment>
      <div>
        <Navigation />
      </div>
    </Fragment>
   </AppContainer>
  );
}

export default App;
