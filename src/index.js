import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import colors from './utils/style/colors';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * CSS Global styles for the site using styled.components
 */
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100vh; 
  }

  body {
    /* margin: 0; */
    font-family: 'Roboto', 'Montserrat', 'Segoe UI', 'Oxygen', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${colors.tertiary};
    max-width: 1440px;
    margin: auto;
    box-sizing: border-box;

  }

  /* main {
    min-height: calc(100vh - 24rem); 
   /* height: 100%;  
 } 
  */

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
