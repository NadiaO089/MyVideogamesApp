import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://pi-videogames-backend-production.up.railway.app/';

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>,
  document.getElementById('root')
);


