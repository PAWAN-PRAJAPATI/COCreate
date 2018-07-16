
import React, { Component } from 'react';
import { verifyUser,test, getUser } from "./../ApiCalls";
import {mySubmission} from "./../ApiCalls"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class App extends Component {
  
    state = {
  
    }

    componentWillMount(){
      getUser((user)=>console.log("user"))

      console.log("componentWillMount Submission")
    }


    submit=()=>{
      const cid = this.props.match.params.id
      const id_token = cookies.get("id_token")
      mySubmission(this.state,id_token,cid,(result)=>console.log(result))
    }

    
  
    render() {

      console.log(this.props.match)
      return (
        <div>
          <p>This is Sub</p>
          <input type="text" onChange={(event)=>this.setState({title:event.target.value})}/>
          <button onClick={this.submit}>Submit</button>
        </div>
  
      );
    }
  }