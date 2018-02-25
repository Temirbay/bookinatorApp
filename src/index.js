import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'


ReactDOM.render(
  <Hashrouter>
    <App />
  </Hashrouter>
  ,
  document.getElementById('root')
);
