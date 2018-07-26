import {Grid,Row,Col,Panel} from "react-bootstrap"

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
          <Grid style={{backgroundColor:'',border:10, height:'800px'}}>
          <Row  style={{backgroundColor:'',borderStyle:'rounded',marginTop:10,border:'10px', justifyContent:'center'}}>
          <Col xs={9}>
              <Panel style = {{padding:10}}>

                <input style = {{width:'100%',marginBottom:20, border:'none',outline:'none',fontSize:30}} type="text" onChange={(event)=>this.setState({title:event.target.value})} placeholder="Title"/><br/>
                <textarea  style = {{width:'100%',height:'100px' ,border:'none',outline:'none',fontSize:20}} type="text" onChange={(event)=>this.setState({semi_disc:event.target.value})} placeholder="Explain your idea in few lines"/><br/>

              </Panel>

            </Col>

            <Col xs={9}>
              <Panel style = {{padding:10}}>

                <h2 style={{marginBottom:20}}>Description</h2>
                <h4 style={{marginBottom:20}}>Explain your idea in detailed ad possible</h4>
                <textarea  style = {{width:'100%',height:'500px', border:'none',outline:'none',fontSize:20}} type="text" onChange={(event)=>this.setState({disc:event.target.value})} placeholder="Description"/><br/>
              
              </Panel>

            </Col>
            <Col xs={12}>
              <button onClick={this.submit}>Submit</button>
            </Col>
            </Row>
          </Grid>
        </div>
  
      );
    }
  }