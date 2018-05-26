import React, { Component } from 'react';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,Tab,Tabs,
Navbar,FormGroup,FormControl,Button,Image} from 'react-bootstrap';
class NavBarCustom extends Component {
  render() {
    return (
        <div>
            <div style={{ backgroundColor:'#212121'}}>
            <Navbar.Header style={{marginLeft:'12%'}}>
                <Navbar.Brand>
                <a href="#home" style={{color:'white'}}>CoCreate</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullRight style={{marginRight:'10%'}}>
                <FormGroup>
                    <FormControl type="text" placeholder="Search Contest"/>
                </FormGroup>{' '}
                <Button type="submit">Search</Button>
                </Navbar.Form>
            </Navbar.Collapse>
            </div>
        </div>
    );
  }
}

export default NavBarCustom;
