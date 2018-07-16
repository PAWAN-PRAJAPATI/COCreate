
import React, { Component } from 'react';
import {test } from "./../ApiCalls";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class App extends Component {
  
    state = {
  
    }

    componentWillMount(){
    
    }
  
    render() {

  
      return (
        <div>
          <p>This is Error</p>
        </div>
  
      );
    }
  }