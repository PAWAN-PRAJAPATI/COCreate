import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,ListGroupItem,ListGroup,
Navbar,FormGroup,FormControl,Button,Image} from 'react-bootstrap';
import NavBarCustom from './NavBarCustom.js'
import { Router, Route, Switch } from 'react-router'
import axios from 'axios'
import Contest_Submisison from './contest_submission'
import Contest_Overview from './contest_overview'

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

            <div style={{width:'75%', marginLeft:'18%', marginRight:'0%',marginTop:"5%", display:'flex',flexWrap:'wrap',flexDirection:'column',}}>
                            <div style={{marginBottom:'30px'}}><p style={{fontSize:30}}>Lorem ipsum dolor sit amet</p></div>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="OverView">
                                <Contest_Overview/>
                            </Tab>
                            <Tab eventKey={2} title="Submission">
                                <Contest_Submisison/>
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
