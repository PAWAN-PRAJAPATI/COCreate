import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import {Grid,Row,Col} from "react-bootstrap"

import React, { Component } from 'react';
import { getAllContests } from "./../ApiCalls";
import Block from "./../components/Block"
//TODOS 
//fetch all the contest
//with photso/title/logistics/little disc
//Display in blocks
export default class App extends Component {
  
    state = {

    }

    componentWillMount(){
      getAllContests((result)=>{
        console.log(result)
        this.setState({block_data:result})
      })
      
    }
  
    
    mapContests=()=>{
      console.log("mapContests")
      //<Block src="https://www.google.com/logos/doodles/2018/world-cup-2018-day-24-5994561313701888-law.gif" data= {this.state.block_data} />
      var blocks_data= this.state.block_data
      console.log("blocks",blocks)
      var blocks = blocks_data.map((data)=>{
        //console.log("data",data)
        return(
          <Block src="" data={data}/>
        )
      })
      return blocks
    }

    render() {

  
      
      console.log("state",this.state.block_data)
      if(this.state.block_data){

        console.log("mapContests")
        var blocks_data= this.state.block_data
        var blocks = blocks_data.map((data)=>{
          console.log("data",data)

          //console.log("data",data)
          return(
            <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <Block src="https://www.google.com/logos/doodles/2018/world-cup-2018-day-24-5994561313701888-law.gif" data={data} />
            <Block src="https://www.google.com/logos/doodles/2018/world-cup-2018-day-24-5994561313701888-law.gif" data={data} />
            </div>
          )
        })

        return (
          <Router>
            <Grid>
            <Row>
              <Col xs={12} style={{marginBottom:20}}>
                  <h1 style={{color:"gray"}}>Contests</h1>
              </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Running</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Finished</a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">  
                <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                    {blocks}

                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Running...</div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Finished...</div>
            </div>

          </Col>
          </Row>
          </Grid>
          </Router>
        );
      }
      return(
        <div>
          Loading...
        </div>
      )
    }
  }