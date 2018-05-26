import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Bootstrap, Grid, Row, Col,Alert,
Navbar,FormGroup,FormControl,Button,Image,MenuItem} from 'react-bootstrap';
import NavBarCustom from './NavBarCustom.js';
import { Router, Route, Switch } from 'react-router'
import { browserHistory } from 'react-router';
import { withRouter } from "react-router-dom";


class Block extends Component {
  

  state={
    hoverStyle:{maxWidth:'250px',
      height:'400px',
      boxShadow:'7px 7px 15px gray',
      margin:'20px'

      }
  }
  onOver=()=>{
    this.setState({hoverStyle:{
        maxWidth:'250px',
        height:'400px',
      boxShadow:'10px 10px 50px gray',
      margin:'20px'
      }
    })
  }

  onOut=()=>{
    this.setState({hoverStyle:{
        maxWidth:'250px',
      height:'400px',
      boxShadow:'7px 7px 15px gray',
      margin:'20px'

      }
    })
  }

    _gotoContest=()=>{
      const { history } = this.props;
      history.push("/contest")    }
  render() {
    return (
      <div >
        <Grid style={this.state.hoverStyle} onClick={this._gotoContest} className='hovereffect' onMouseOver={this.onOver} onMouseOut={this.onOut}>
          <Row >
            <Col>
              <Image src={this.props.src} style={{width:'100%',height:'100px'}} />
            </Col>
          </Row>
          <Row>
            <Col className="fieldLabel">
                 <p style={{fontSize: 16}}><b>AeroSpace SSL Design</b></p>
            </Col>
          </Row>
          <Row style={{height:'45%' ,overFlow:'hide'}}>
            <Col className="fieldLabel" style={{textAlign:'center'}}>
            Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. 
            Donec hendrerit tempor tellus. 
            Donec pretium posuere tellus. Proin quam nisl, 
            tincidunt et, mattis eget, convallis nec, purus.   
            </Col>
          </Row>
            
          <Row>
          <hr/>
              <Col xs={1} xsOffset={1} style={{backgroundColor:'white'}}>
              15
              </Col>
              <Col xs={1} style={{backgroundColor:'white'}}>
              <Image  style={{marginLeft:'7px', height:'19px',width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1024px-OOjs_UI_icon_eye.svg.png"/>
              </Col>
              <Col xs={1}  xsOffset={4}  style={{marginTop:'3px',backgroundColor:'white'}}>
              25
              </Col>
              <Col xs={1}  style={{backgroundColor:'white'}}>
              <Image  style={{marginLeft:'0px', height:'20px',width:'19px'}} src="https://cdn1.iconfinder.com/data/icons/social-media-14/96/Like-512.png" />
              </Col>
          </Row>        
        </Grid>
        </div>
    );
  }
}

export default  (Block);
