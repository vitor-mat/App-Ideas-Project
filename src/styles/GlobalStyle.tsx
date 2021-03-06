import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1{
    text-align: center;
    font-size: 72px;

    @media(max-width: 375px){
      font-size: 56px;
    }
  }
  
  h2{
    font-size: 48px;

    @media(max-width: 768px){
      text-align: center;
      font-size: 40px;
    }
  }
`