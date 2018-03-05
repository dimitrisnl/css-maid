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
  height: 100%;
  width: 100%;

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled('textarea')`
  height: 80%;
  width: 100%;
  max-width: 800px;

  border: 1px solid tomato;

  resize: none;
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

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #root{
    width: 100%;
    height: 100%;
  }
`;
