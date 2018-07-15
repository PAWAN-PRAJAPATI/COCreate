
import React, { Component } from 'react';
import { verifyUser,test } from "./../ApiCalls";

import Cookies from 'universal-cookie';
const cookies = new Cookies();
var URL = require('url-parse');
export default class App extends Component {
  
    state = {
  
    }

    componentWillMount(){
 

    }
  
    render() {

      console.log(this.props.match,"match")
      const c_id = this.props.match.params.id
      return (
        <div>
          <p>This is Contest Overview: {c_id} </p>
        </div>
  
      );
    }
  }