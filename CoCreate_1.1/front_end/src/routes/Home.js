
import React, { Component } from 'react';
import {test } from "./../ApiCalls";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class App extends Component {
  
    state = {
  
    }

    componentWillMount(){
      console.log(this.props.match)
      console.log("componentWillMount home")
      const id_token =  cookies.get('id_token')
      console.log(id_token)
      //var data = JSON.stringify({asdfasdf:'asdfasd',adsfa:'dsfasdf'})
      //console.log(data)
      //verifyUser(id_token)

    }
  
    render() {

  
      return (
        <div>
          <p>This is Home</p>
        </div>
  
      );
    }
  }