import styled from 'react-emotion';

export const Wrapper = styled('div')`
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

export const Header = styled('h1')`
  display: flex;
  padding: 0 2rem;

  justify-content: center;
  align-items: center;

  color: #fff;

  text-shadow: 1px 2px 2px black;
  font-size: 3rem;
`;

export const TextArea = styled('textarea')`
  height: 60%;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 1px 4px #ffffff80;
  border: 0;
  padding: 2rem;
  overflow: auto;

  font-family: inherit;
  font-size: inherit;

  border-radius: 8px;
  resize: none;
  opacity: 0.8;
`;

export const Button = styled('button')`
  padding: 0.5rem 1rem;
  border: 3px solid #ffffff90;
  margin-top: 1rem;

  background: transparent;
  color: #fff;

  text-shadow: 1px 1px 2px black;
  font-size: 1.1rem;

  transition: all 0.1s ease-in-out;

  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background: #ffffff20;
  }
  &:active {
    background: #ffffff50;
  }
`;
