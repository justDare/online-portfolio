import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-font-family: 'Fira Code', monospace;
    --second-font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    font-family: var(--main-font-family);
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.primaryText};
    margin: 0.67em 0;
    font-family: var(--main-font-family);
  }
  h1 {
    font-weight: 700;
    font-size: 50px;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
  }
  h3 {
    font-weight: 700;
    font-size: 34px;
  }
  h4 {
    font-weight: 600;
    font-size: 28px;
  }
  h4 {
    font-weight: 600;
    font-size: 28px;
  }
  h5 {
    font-weight: 600;
    font-size: 24px;
  }
  h6 {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    color: ${(props) => props.theme.colors.primaryText};
    font-family: var(--main-font-family);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.75;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryText};
    font-family: var(--main-font-family);
    font-weight: 500;
    font-size: 20px;
    
    &:hover {
      color: ${(props) => props.theme.colors.secondaryText};
    }
  }
  button {
    font-family: var(--main-font-family);

    &:focus {
      outline: none;
    }
  }
  input, textarea {
    font-family: var(--main-font-family);
  }

  // Util
  .secondary-text {
    color: ${(props) => props.theme.colors.secondaryText};
  }

  @media (max-width: 576px) {
    h1 { font-size: 38px; }
    h2 { font-size: 34px; }
    h3 { font-size: 28px; }
    h4 { font-size: 24px; }
    h5 { font-size: 20px; }
    h6 { font-size: 18px; }
    p, a { font-size: 16px; }
  }
`
