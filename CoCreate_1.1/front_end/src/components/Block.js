import React, { Component } from 'react';
import {Bootstrap, Grid, Row, Col,Alert,
Navbar,FormGroup,FormControl,Button,Image,MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Block extends Component {
  

  state={

    hoverStyle:{maxWidth:'250px',
      height:'400px',
      boxShadow:'7px 7px 15px gray',
      margin:'20px',  
      borderRadius: 10,   
      }
  }

  onOver=()=>{
    this.setState({hoverStyle:{
        borderRadius: 10,      
        maxWidth:'250px',
        height:'400px',
        boxShadow:'10px 10px 50px gray',
        margin:'20px',
        }
    })
  }

  onOut=()=>{
    this.setState({hoverStyle:{
        maxWidth:'250px',
        height:'400px',
        boxShadow:'7px 7px 15px gray',
        margin:'20px',
        borderRadius: 10      

      }
    })
  }

  getToContest=()=>{
    console.log("getToContest")
    window.location = "http://localhost:3000/contests/" + this.props.data._id
  }


  render() {
      console.log("props:",this.props)
    return (
      <Router>
      <div>
      <a className="nav-link" href = {"/contests/" + this.props.data._id+"/overview"}>
      <div  style={{padding:'10px'}} >
        <Grid style={this.state.hoverStyle} onClick={this._gotoContest} className='hovereffect' onMouseOver={this.onOver} onMouseOut={this.onOut}>
          <Row>
            <Col>
              <Image src={this.props.src} style={{width:'100%',height:'100px'}} />
            </Col>
          </Row>
          <Row style={{overFlow:'hide',justifyContent:'center',marginBottom:10}}>
            <Col className="fieldLabel" style={{textAlign:'center'}}>
                {this.props.data.title}
            </Col>
          </Row>
          <Row style={{height:'45%' ,overFlow:'hide'}}>
            <Col className="fieldLabel" style={{textAlign:'center'}}>
                {this.props.data.disc}
            </Col>
          </Row>
            
          <Row >
         
              <Col xs={2} xsOffset={1} >
              {this.props.data.logs.views}
              </Col>
              <Col xs={0} style={{backgroundColor:'white'}}>
              <Image  style={{marginLeft:'7px', height:'19px',width:'20px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1024px-OOjs_UI_icon_eye.svg.png"/>
              </Col>
              <Col xs={2}  xsOffset={3}  style={{marginTop:'3px',backgroundColor:'white'}}>
                <div>
                {this.props.data.logs.contris}
                </div>
              </Col>
              <Col xs={1}  style={{backgroundColor:'white'}}>
              <Image  style={{marginLeft:'0px', height:'20px',width:'19px'}} src="https://cdn1.iconfinder.com/data/icons/social-media-14/96/Like-512.png" />
              </Col>
          </Row>        
        </Grid>
        </div>
        </a>

        </div>

    </Router>
    );
  }
}

export default  (Block);