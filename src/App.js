import React, { Component } from 'react';
import styled, { injectGlobal } from 'react-emotion';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <TextArea />
      </StyledApp>
    );
  }
}

export default App;

const StyledApp = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 1rem;
`;

const TextArea = styled('textarea')`
  border: 1px solid tomato;
  resize: none;
  height: 80%;
  width: 100%;
  max-width: 800px;
`;

injectGlobal`
  *{
    box-sizing:border-box;
  }

  body{
    margin: 0;
    padding: 0;

    height: 100vh;
    width: 100vw;
  }

  #root{
    width: 100%;
    height: 100%;
  }
`;
