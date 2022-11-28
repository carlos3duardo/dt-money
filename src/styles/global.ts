import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.gray500};
  }

  body {
    background-color: ${(props) => props.theme.gray800};
    color: ${(props) => props.theme.gray100};
    -webkit-font-smoothig: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
