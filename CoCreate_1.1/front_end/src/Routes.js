import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contests from './routes/Contests'
import Home from './routes/Home'
import Login from './routes/Login'
import RoutesContest from './RoutesContest'

import Cookies from 'universal-cookie';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import React, { Component } from 'react';
import { sendUser } from "./ApiCalls";

const cookies = new Cookies();

export default class Routes   extends Component{


  state = {

  }



  logout=()=>{
    console.log("Logout")
    cookies.set('id_token', "logout", { path: '/' });
    this.setState({name:undefined})
  }

  getUser(id_token){
      if(id_token && id_token!="logout"){
        fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          sendUser(responseJson)
          this.setState({"name":responseJson.family_name})
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else{
      console.log("cookie not found")
    }
  }

  componentWillMount(){
    
    const id_token =  cookies.get('id_token')
    console.log(id_token)
    this.getUser(id_token)
    

  }

  render(){
    console.log(this.state)
    return(
    <Router>
      <div>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contests">contests</Link>
          </li>
          <li>
            <Link to="/for_corporates">for_corporates</Link>
          </li>
          <li>
            <Link to="/for_contributors">for_contributors</Link>
          </li>
          
          {this.state.name ?
            <li  onClick = {this.logout}>
              <Link to="/logout">Logout</Link>
              <p>{this.state.name}</p>
           </li>
          :
            <li>
              <div>
                <a href="http://localhost:3000/login">Login</a>
              </div>
            </li>
            
        }

        </ul>
  
        <hr />


        <Route path="/contests" exact component={Contests} />




      </div>
    </Router>
    
    )
  }
}

