import React, { Component } from 'react';
import { injectGlobal } from 'react-emotion';
import GithubCorner from 'react-github-corner';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { parseCSS } from './utils/parser';
import {
  Wrapper,
  Header,
  TextArea,
  Button,
  Container,
  ButtonsRow,
} from './components';

class App extends Component {
  state = {
    userStyles: '',
    formattedStyles: '',
  };

  handleInput = e => {
    this.setState({ userStyles: e.target.value });
  };

  formatCSS = () => {
    if (this.state.userStyles.trim() === '') return false;

    const formattedStyles = parseCSS(this.state.userStyles);
    this.setState({ formattedStyles });
  };

  render() {
    return (
      <Wrapper>
        <Header>CSS MAID</Header>
        <Container>
          <TextArea
            placeholder="Your CSS goes here"
            value={this.state.userStyles}
            onChange={this.handleInput}
          />
          <TextArea
            placeholder="Any changes will appear here"
            value={this.state.formattedStyles}
          />
        </Container>
        <ButtonsRow>
          <Button onClick={this.formatCSS}>Format</Button>

          <CopyToClipboard text={this.state.formattedStyles}>
            <Button>Copy to clipboard</Button>
          </CopyToClipboard>
        </ButtonsRow>

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
