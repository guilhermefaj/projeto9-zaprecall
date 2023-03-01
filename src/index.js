import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import App from './App';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);