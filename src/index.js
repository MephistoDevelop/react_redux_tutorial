import React from 'react';
import ReactDOM from 'react-dom';
import App from'./components/App';
import './assets/styles.css';

import { Provider } from 'react-redux'; //Allows to inject the Global State
import { createStore } from 'redux'; // Initialize the Store
import reducer from './store/reducer'; //import reducer from store folder

const store = createStore(reducer); // pass the reducer to the store

// store = { store } allows to entire applicaion to use the Redux Store Object
ReactDOM.render(<Provider store = {store}><App/></Provider>,document.getElementById('root'));