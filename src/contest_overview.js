import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,ListGroupItem,ListGroup,
Navbar,FormGroup,FormControl,Button,Image} from 'react-bootstrap';
import NavBarCustom from './NavBarCustom.js'
import { Router, Route, Switch } from 'react-router'
import axios from 'axios'
import styles from './style'

class Contest_Overview extends Component {

  render() {
    return (
        <div style={{marginLeft:'0%'}}>
                        <p style={{fontSize:40,marginTop:'60px',color:'#757575',fontWeight:'bold'}}>Discription</p>
                            <div style={{display:'flex',marginBottom: '50px',flexDirection:'column'}}>
                                <div style={{border:'gray',marginTop:'30px',backgroundColor:'white',marginRight:'40px', display:'flex',flexDirection:'column', width:'90%',justifyContent:'center',boxShadow:'15px 15px 30px #BDBDBD',padding:'20px'}}>
                                    <p style={styles.contenttext}>
                                    onec pretium posuere tellus. Proin quam nisl, 
                                        tincidunt et, mattis eget, convallis nec, purus.   
                                        Lorem ipsum dolor sit amet, 
                                        consectetuer adipiscing elit. 
                                        Donec hendrerit tempor tellus. 
                                        Donec pretium posuere tellus. Proin quam nisl, 
                                        tincidunt et, mattis eget, convallis nec, purus.   
                                        Lorem ipsum dolor sit amet, 
                                        consectetuer adipiscing elit. 
                                        Donec hendrerit tempor tellus. 
                                        Donec pretium posuere tellus. Proin quam nisl, 
                                        tincidunt et, mattis eget, convallis nec, purus. 
                                    </p>
                                    </div>

                                    <div style={{width:'90%',marginTop:'50px'}}>
                                    <ListGroup>
                                    <ListGroupItem style={{boxShadow:'20px 20px 40px #BDBDBD ',color:'#424242'}} header="References">
                                        <ListGroupItem style={{border:'white',color:'#0277BD'}} onClick={this.add}>Donec hendrerit</ListGroupItem>
                                        <ListGroupItem style={{border:'white',color:'#0277BD'}} href="#link2">tincidunt et, </ListGroupItem>
                                        <ListGroupItem style={{border:'white',color:'#0277BD'}} href="#link2">Lorem ipsum</ListGroupItem>
                                        <ListGroupItem style={{border:'white',color:'#0277BD'}} href="#link2">Lorem ipsum</ListGroupItem>
                                        <ListGroupItem style={{border:'white',color:'#0277BD'}} href="#link2">tincidunt et, </ListGroupItem>
                                    </ListGroupItem>
                                    </ListGroup>
                                </div>  
            </div>     
            </div>       
            

    );
  }
}

export default Contest_Overview;
