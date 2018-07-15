import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contests from './routes/Contests'
import Home from './routes/Home'
import Login from './routes/Login'
import RoutesContest from './RoutesContest'
import Routes from './Routes';

import Cookies from 'universal-cookie';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import React, { Component } from 'react';

const cookies = new Cookies();

export default class Routes0   extends Component{


  state = {

  }



  logout=()=>{
    console.log("Logout")
    cookies.set('id_token', "logout", { path: '/' });
    this.setState({name:undefined})
  }



  render(){
    console.log(this.state)
    return(
    <Router>
      <div>


  
        <hr />


        <Route path="/" exact component={Routes} />
        <Route path="/login" exact component={Login} />
        <Route path= "/contests/:id"  component={RoutesContest} />



      </div>
    </Router>
    
    )
  }
}

