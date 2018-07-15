
import React, { Component } from 'react';
import { verifyUser,test } from "./../ApiCalls";
import {mySubmission} from "./../ApiCalls"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class App extends Component {
  
    state = {
  
    }

    componentWillMount(){
      console.log("componentWillMount Submission")
      const id_token =  cookies.get('id_token')
      console.log(id_token)
      this.getUser(id_token)
    }

    getUser(id_token){
        if(id_token && id_token!="logout"){
          fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
            //this.setState({"name":responseJson.family_name})
          })
          .catch((error) => {
            console.error(error);
          });
      }
      else{
        window.location = "http://localhost:3000/login"
      }
    }

    submit=()=>{
      const id_token = cookies.get("id_token")
      mySubmission(this.state,id_token,this.callback)
    }
    callback=(result)=>{
      console.log(result)
    }
    
  
    render() {

  
      return (
        <div>
          <p>This is Sub</p>
          <input type="text" onChange={(event)=>this.setState({title:event.target.value})}/>
          <button onClick={this.submit}>Submit</button>
        </div>
  
      );
    }
  }