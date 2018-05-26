import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,ListGroupItem,ListGroup,
Navbar,FormGroup,FormControl,Button,Image} from 'react-bootstrap';
import NavBarCustom from './NavBarCustom.js'
import { Router, Route, Switch } from 'react-router'
import axios from 'axios'

class Contest extends Component {
  
//http://app-f36071be-aef3-41b9-b276-9f1aaf8439bd.cleverapps.io/tasksget
//http://localhost:3000/tasksget
    add=()=>{
        
        /*return fetch('http://localhost:5000/tasksget',{
            method:"POST",
            header:{
                Accept: 'application/json',
                'Contenr-Type':'application/x-www-form-urlencoded',         
            },
            body: JSON.stringify({
                "type": "select",
                "args": {
                    "table": "author",
                    "columns": [
                        "name"
                    ],
                    "limit": "1"
                }
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
        })
        .catch((error) => {
        console.error(error);
        });
        */

       axios.post('http://localhost:5000/tasksget', {
        method: 'post',
        url: 'http://localhost:5000/tasksget',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
       })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } 


  render() {
    return (
        <div >
            <NavBarCustom/>
            <div >

            <div style={{width:'85%', marginLeft:'12%', marginRight:'0%',marginTop:"5%", display:'flex',flexWrap:'wrap',flexDirection:'column',}}>
                            <div style={{marginBottom:'30px'}}><p style={{fontSize:30}}>Lorem ipsum dolor sit amet</p></div>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="OverView">
                            <p style={{fontSize:40,marginTop:'20px',color:'#757575'}}>Discription</p>
                        <div style={{display:'flex',marginBottom: '50px'}}>
                            <div style={{border:'gray', marginRight:'40px', display:'flex',flexDirection:'column', width:'70%',justifyContent:'center',boxShadow:'15px 15px 30px #BDBDBD',padding:'20px'}}>
                                <p>Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. 
                                Donec hendrerit tempor tellus. 
                                Donec pretium posuere tellus. Proin quam nisl, 
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
                                Lorem ipsum dolor sit amet, 
                                consectetuer adipiscing elit. 
                                Donec hendrerit tempor tellus. 
                                Donec pretium posuere tellus. Proin quam nisl, 
                                tincidunt et, mattis eget, convallis nec, purus.   
                            </p>
                            <p>
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

                            <div style={{width:'25%',}}>
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
                            </Tab>
                            <Tab eventKey={2} title="Contribuite">
                            <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

                            </div>            
                            </Tab>
                            <Tab eventKey={3} title="Community" >
                            Tab 3 content
                            </Tab>
                            <Tab eventKey={4} title="Forum">
                            <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

                            </div>            
                            </Tab>
                            </Tabs>
            </div>   

            </div>
            </div>       
            

    );
  }
}

export default Contest;
