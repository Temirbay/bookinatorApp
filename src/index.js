import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import SignIn from './pages/SignIn.js'
import { BrowserRouter as Hashrouter} from 'react-router-dom'


ReactDOM.render(
  <Hashrouter>
    <App/>
  </Hashrouter>
  ,
  document.getElementById('root')
);
