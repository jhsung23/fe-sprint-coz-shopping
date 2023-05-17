import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button{
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
`;

const GlobalStyle = () => {
  return <Global />;
};

export default GlobalStyle;
