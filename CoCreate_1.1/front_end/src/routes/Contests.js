import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'

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
            <Block src="https://www.google.com/logos/doodles/2018/world-cup-2018-day-24-5994561313701888-law.gif" data={data} />
          )
        })

        return (
          <Router>
            <div>
              <p>This is contests</p>
              {blocks}

            </div>
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