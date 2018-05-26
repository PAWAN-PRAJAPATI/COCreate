import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,
Navbar,FormGroup,FormControl,Button,Image} from 'react-bootstrap';
import Block from './Block.js'
import NavBarCustom from './NavBarCustom.js'
import { Router, Route, Switch } from 'react-router'

class Contests extends Component {
  
  render() {
    return (
      <div>
        <NavBarCustom/>
        <div style={{marginLeft:'12%', marginRight:'5%',marginTop:"10px", display:'flex',flexWrap:'wrap',flexDirection:'column'}}>
        <p style={{fontSize:50}}>Contests</p>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="All">
            <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <Block src="https://www.google.com/logos/doodles/2018/sam-selvons-95th-birthday-4907112789442560-2x.jpg"/>
            <Block src="https://www.google.com/logos/doodles/2018/emil-berliners-167th-birthday-6230789162270720-2x.jpg"/>
            <Block src="https://lh3.googleusercontent.com/n64YtaHprD8p5oNjr1BGDnODnumUer0UEb613LJFtmLROCa-IU_8MLO_DsWrmVUCv10ZvoRBrj73WwY-uKY8htbd30-m49-GzVIPChYfsA"/>
            <Block src="https://lh3.googleusercontent.com/sGcbYzkKKTQVMRZiQlRUsgTqMNjt-B5FLTMnO2KOncq11dtkfjrNZ7-ZodZK7Ye80G6DjgjcK-46Zw0XzwK3OnIzXuozv3fO3cZESSKy"/>
            <Block src="https://lh3.googleusercontent.com/cb3uBlgZKL-k92exMWE3pwwJjjul7Z9O3CP1w6Rm4pp5pcRANytd1wev46l611tapmOa93m4K_NURaO7jw1--XuN8jRQFCaBj7SuUq4"/>
            <Block src="https://lh3.googleusercontent.com/ZNTOMPnXXjRuerTtYjGzYMUB0QCvtKGoNLp0iab3KFw_crF5mScwNSXU1Un7ZTNx-c_9LFNTKFtpeWOB-EVVWY2TOYBShbaTNuXhnNQ"/>
            </div>
            </Tab>
            <Tab eventKey={2} title="Running">
            <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <Block src="https://lh3.googleusercontent.com/n64YtaHprD8p5oNjr1BGDnODnumUer0UEb613LJFtmLROCa-IU_8MLO_DsWrmVUCv10ZvoRBrj73WwY-uKY8htbd30-m49-GzVIPChYfsA"/>
            <Block src="https://lh3.googleusercontent.com/cb3uBlgZKL-k92exMWE3pwwJjjul7Z9O3CP1w6Rm4pp5pcRANytd1wev46l611tapmOa93m4K_NURaO7jw1--XuN8jRQFCaBj7SuUq4"/>
            <Block src="https://lh3.googleusercontent.com/ZNTOMPnXXjRuerTtYjGzYMUB0QCvtKGoNLp0iab3KFw_crF5mScwNSXU1Un7ZTNx-c_9LFNTKFtpeWOB-EVVWY2TOYBShbaTNuXhnNQ"/>
            </div>            
            </Tab>
            <Tab eventKey={3} title="Finished" >
              Tab 3 content
            </Tab>
        </Tabs>
        </div>
        </div>
    );
  }
}

export default Contests;
