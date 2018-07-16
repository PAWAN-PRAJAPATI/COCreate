
import React, { Component } from 'react';
import { verifyUser,test, getContestOverview } from "./../ApiCalls";

import Cookies from 'universal-cookie';
const cookies = new Cookies();
var URL = require('url-parse');
export default class App extends Component {
  
    state = {
      error:"Loading..."
    }

    componentWillMount(){

        const cid = this.props.match.params.id
        
        getContestOverview((result)=>{
          console.log(result)
          this.setState(result)
        },cid)

        console.log("mount overview",this.props.match)
    }
  
    render() {

      console.log(this.props.match,"match")
      console.log(this.state)
      const c_id = this.props.match.params.id
      if(this.state._id){
        return (
          <div>
            <p> This is Contest Overview: {c_id} </p>
          </div>
    
        );
      }
      else{
        return(
         <p> {this.state.error}</p>
       )
      }
    }
  }