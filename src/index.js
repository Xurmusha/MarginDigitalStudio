import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';
import PageEnter from "./components/PageEnter";
import Routing from "./components/Routing";


ReactDOM.render(
  <React.StrictMode>

    <Routing/>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
