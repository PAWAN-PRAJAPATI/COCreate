
import React, { Component } from 'react';
//import { verifyUser,test } from "./../ApiCalls";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './routes/Home'
import OverviewContest from './routes/OverviewContest'
import SubmissionContest from './routes/SubmissionContests'



var URL = require('url-parse');

export default class ViewContest extends Component {
  
    state = {
        c_id:"Loading..."
    }

    componentWillMount(){
        console.log("componentWillMount ViewContest")
        this.setState({c_id:this.props.match.params.id})
    }
  
    render() {
      console.log(this.props.match)
      console.log(this.state.c_id,"state")
      const url = this.props.match.url
      const path = this.props.match.path

      return (
        <Router>
        <div>
  
          <ul>
            <li>
              <Link to={url+"/overview"}>overviwe</Link>
            </li>
            <li>
              <Link to={url+"/details"}>details</Link>
            </li>
            <li>
              <Link to={url+"/submission"}>submission</Link>
            </li>
            <li>
              <Link to={url+"/contributions"}>contributions</Link>
            </li>        
  
          </ul>
    
          <hr />

          <Route path={path+"/overview"} exact component={OverviewContest} />
          <Route path={path+"/submission"} exact component={SubmissionContest} />

        </div>
      </Router>
  
      );
    }
  }