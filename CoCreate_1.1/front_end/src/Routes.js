import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contests from './routes/Contests'
import Home from './routes/Home'
import Login from './routes/Login'
import RoutesContest from './RoutesContest'
import {Grid,Row,Col} from "react-bootstrap"
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
      <Grid>
        <Row>
          <Col >
                <Link className="nav-link" style={{fontSize:18}} to="/home">Home</Link>
          </Col> 
          <Col>   
                <Link  className="nav-link"  style={{fontSize:18}} to="/contests">contests</Link>
          </Col>   
          <Col>
              <Link  className="nav-link"  style={{fontSize:18}} to="/for_corporates">For Corporates</Link>
          </Col>   
          <Col x>  
                <Link  className="nav-link"  style={{fontSize:18}} to="/for_contributors">For Contributors</Link>
          </Col>   
  
              {this.state.name ?
              
              <Col xsOffset={5} onClick={this.logout} >
                  <p style={{fontSize:18}}>{this.state.name}</p>
              </Col>
              
              :
                <Col  xsOffset={5} smOffset={4}>
                  <div style={{backgroundColor:''}}>
                    <a   style={{fontSize:18}} className="nav-link" href="http://localhost:3000/login">Login</a>
                  </div>
                </Col>
            }

        </Row>

        <hr />

        </Grid>

        <Route path="/contests" exact component={Contests} />

      </div>
    </Router>
    
    )
  }
}



