import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/icomoon/style.css';
import $ from 'jquery';
import Popper from '@popperjs/core';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import listingsService from './services/actions/listingsService';
import './i18n';
import 'animate.css';

listingsService
  .getAll()
  .then(listings => {
    console.log('*** INDEX.JS listings = ',listings);
    ReactDOM.render(
      <React.StrictMode>
        <App listings={listings} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch(error => {
    console.log('GET failed. Error:', error)
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
