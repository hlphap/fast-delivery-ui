import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Layout from './components/Layout'

import "./assets/boxicons-2.0.9/css/boxicons.min.css"
import "./sass/index.scss"


ReactDOM.render(
  <React.StrictMode>

      <Layout />

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
