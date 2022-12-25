import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: ${({ theme }) => theme.color.default};
  -webkit-user-drag: none;
}

a {
  color: inherit;
  text-decoration: none;
}

textarea,
pre {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

.ql-container {
  font-size: 1.5rem !important;
  position: inherit !important;
}

@media (prefers-color-scheme: dark) {
  /* html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  } */
}
`;

export default GlobalStyle;
