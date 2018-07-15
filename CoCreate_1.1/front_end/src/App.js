import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
const cookies = new Cookies();

class App extends Component {
  
  state = {

  }
  
  responseGoogle=(response)=>{
    const id_token = response.Zi.id_token
    console.log('id_token:',id_token)
    cookies.set('id_token', id_token, { path: '/' });
  }

  componentWillMount(){
    
    const id_token =  cookies.get('id_token')
    fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      this.setState({"name":responseJson.family_name})
    })
    .catch((error) => {
      console.error(error);
    });

  }

  responseGoogleError=(error)=>{
    console.log(error)
  }


  logout=()=>{
    cookies.set('id_token', "logout", { path: '/' });
  }

  setCookies=(value,name)=>{
   
    console.log('cookie set:',cookies.get('id_token'));
  }
  

  render() {

    if(cookies.get('id_token')){
      return(
        <div>
          <p> Welcome {this.state.name} </p>
        </div>
      )
    }

    return (
      <div>
        <GoogleLogin
        clientId="208477398781-aoee5f5c8ru03jthiile1trjah0egb7e.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogleError}/>

        <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={this.logout}/>
    </div>

    );
  }
}

export default App;
