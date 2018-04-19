import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';


import { BrowserRouter as Hashrouter} from 'react-router-dom'


ReactDOM.render(
  <Hashrouter>
    <App/>
  </Hashrouter>
  ,
  document.getElementById('root')
);
