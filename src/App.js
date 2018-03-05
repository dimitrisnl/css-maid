import React, { Component } from 'react';
import { injectGlobal } from 'react-emotion';
import GithubCorner from 'react-github-corner';

import { format } from './utils/functions';
import { Wrapper, Header, TextArea, Button } from './components';

class App extends Component {
  state = {
    userStyles: '',
  };

  handleInput = e => {
    this.setState({ userStyles: e.target.value });
  };

  formatCSS = () => {
    if (this.state.userStyles.trim() === '') return false;

    const formattedText = format(this.state.userStyles);
    this.setState({ userStyles: formattedText });
  };

  render() {
    return (
      <Wrapper>
        <Header>CSS MAID</Header>
        <TextArea
          placeholder="Please don't post your css here"
          value={this.state.userStyles}
          onChange={this.handleInput}
        />
        <Button onClick={this.formatCSS}>Just do it</Button>
        <GithubCorner
          href="https://github.com/DimitrisNL/css-maid"
          bannerColor="#e684ae"
        />
      </Wrapper>
    );
  }
}

export default App;

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
