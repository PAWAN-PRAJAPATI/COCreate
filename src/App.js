import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,
Navbar,FormGroup,FormControl,Button,Image} from 'react-bootstrap';
import Block from './Block.js'
import NavBarCustom from './NavBarCustom.js'
import { Router, Route, Switch } from 'react-router'
import Contests from './Contests.js'
import  Contest  from "./Contest.js";
import contest_submission from "./contest_submission.js"

class App extends Component {
  
  render() {
    return (
      <Contest/>    
      );
  }
}

export default App;
