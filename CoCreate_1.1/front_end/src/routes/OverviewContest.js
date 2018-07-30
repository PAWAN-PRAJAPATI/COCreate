
import React, { Component } from 'react';
import { verifyUser,test, getContestOverview } from "./../ApiCalls";
import {Grid,Row,Col,Button,Panel} from "react-bootstrap"

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
      console.log(this.state,"state")
      console.log(this.props,",this props")
      const c_id = this.props.match.params.id
      if(this.state._id){
        return (
          <div>
            <Grid style={{backgroundColor:'', height:'800px'}}>
            
            <Row  style={{backgroundColor:'',borderStyle:'rounded',marginTop:10,border:'10px', justifyContent:'center'}}>
            
            <Col xs={9} style={{backgroundColor:'',border:10}}>
            <Panel style = {{padding:10}}>

              <p style = {{marginBottom:20,fontSize:30}}>{this.state.title}</p>
              <p  style = {{width:'100%',fontSize:20}}>{this.state.semi_disc}</p>

            </Panel>

            </Col>

            <Col xs={9}>

              <Panel style = {{padding:10}}>

                <h2 style={{marginBottom:20}}>Description</h2>
                <p  style = {{width:'100%',height:'500px',fontSize:20}} type="text">{this.state.disc}</p>
                
              </Panel>
              
            </Col>
            </Row>
          </Grid>
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