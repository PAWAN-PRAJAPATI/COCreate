import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,ListGroupItem,ListGroup,Form,ControlLabel,FormGroup,FormControl,
Navbar,Button,Image} from 'react-bootstrap';
import NavBarCustom from './NavBarCustom.js'
import { Router, Route, Switch } from 'react-router'
import axios from 'axios'

class Contest_submission extends Component {
  

  render() {
    return (
    
        <div style={{display:'flex',marginBottom: '50px',marginTop:'20px'}}>
            <div style={{border:'gray', marginRight:'40px', display:'flex',flexDirection:'column', width:'90%',boxShadow:'15px 15px 30px #BDBDBD',padding:'20px'}}>
                
            <div style={{ display:'flex',justifyContent:'center',alignItems: 'center', height:'400px',maxWidth:'600px',backgroundColor:'gray'}} >
            </div>

            <FormGroup controlId="formBasicText"
            style={{marginTop:'20px',color:'#757575',width:'100%'}}>
                    <FormControl  placeholder="Title" style={{display:'flex',fontSize:20,height:'55px',color:'black',justifyContent:'center',alignItems:'center'}}/>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
                <ControlLabel style={{fontSize:40,marginTop:'20px',color:'#757575',fontWeight:'bold',marginBottom:'20px'}}>Discreption</ControlLabel>
                <FormControl style={{height:'330px',color:'black'}} componentClass="textarea" placeholder="Indepyh Details" />
            </FormGroup>
            <Button style={{background:'#40C4FF',color:'white'}}>Submit</Button>

            </div>
        
        </div>

   );
  }
}

export default Contest_submission;
