import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:4000/';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render( <App /> );
