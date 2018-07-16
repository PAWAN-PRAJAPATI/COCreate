
import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {GoogleLogin,GoogleLogout} from 'react-google-login'
import {BrowserRouter} from 'react-router-dom'
const cookies = new Cookies();

export default class App extends Component {
  
    state = {
  
    }
    responseGoogle=(response)=>{
      
        const id_token = response.Zi.id_token
        console.log('#COOKIE id_token:',id_token)
        cookies.set('id_token', id_token, { path: '/'});
        window.location= "http://localhost:3000"
        //this.getUser(id_token)
        BrowserRouter.goBack()
        
    }
    

  
    render() {

  
      return (
        <div>

            <GoogleLogin
            clientId="208477398781-aoee5f5c8ru03jthiile1trjah0egb7e.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogleError}/>
                
        </div>
  
      );
    }
  }