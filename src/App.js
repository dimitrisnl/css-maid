import React, { Component } from 'react';
import styled, { injectGlobal } from 'react-emotion';

import { format } from './utils/functions';

class App extends Component {
  state = {
    userStyles: '',
  };

  handleInput = e => {
    this.setState({ userStyles: e.target.value });
  };

  formatCSS = () => {
    const formattedText = format(this.state.userStyles);
    this.setState({ userStyles: formattedText });
  };

  render() {
    return (
      <StyledApp>
        <TextArea
          placeholder="Please don't post your css here"
          value={this.state.userStyles}
          onChange={this.handleInput}
        />
        <button onClick={this.formatCSS}>Just do it</button>
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

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #77a1d3;
  background: linear-gradient(to right, #e684ae, #79cbca, #77a1d3);
`;

const TextArea = styled('textarea')`
  height: 80%;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 1px 1px #efefef;
  border: 0;
  padding: 2rem;
  overflow: auto;

  font-family: inherit;
  font-size: inherit;

  border-radius: 8px;
  resize: none;
  opacity: 0.8;
`;

injectGlobal`
  * {
    box-sizing:border-box;
  }

  body {
    margin: 0;
    padding: 0;

    height: 100vh;
    width: 100vw;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
