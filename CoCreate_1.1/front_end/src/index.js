import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Routes from './Routes';
import Routes0 from './Routes0';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Routes0/>, document.getElementById('root'));
registerServiceWorker();
