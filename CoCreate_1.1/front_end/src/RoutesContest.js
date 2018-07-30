
import React, { Component } from 'react';
import {Grid,Row,Col,Button} from "react-bootstrap"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './routes/Home'
import OverviewContest from './routes/OverviewContest'
import ContriView from './routes/ContriView'

import SubmissionContest from './routes/SubmissionContests'
import { getUser,verifyContest } from './ApiCalls';
import ContributionContest from './routes/ContributionsContest'


var URL = require('url-parse');

export default class ViewContest extends Component {
  
  state = {
    
  }

  componentWillMount(){

 
  }

    componentWillMount(){
        console.log("componentWillMount routesContest")
        const cid = this.props.match.params.id
      
        verifyContest((result)=>{
          console.log(result)
          this.setState(result)
        },cid)
  
        console.log("mount overview",this.props.match)
        //this.setState({c_id:this.props.match.params.id})
        //getUser((user)=>this.setState({user:user}))
    }
  
    render() {
      console.log(this.props.match)
      console.log(this.state,"state")
      const url = this.props.match.url
      const path = this.props.match.path
      if(this.state._id){
      return (

        <Router>
          <div>
            <hr/>
          <Grid >
  
          <Row style={{justifyContent:'center'}}>
          <Col >
                <a className="nav-link" style={{fontSize:18}} href={"/"}>Home</a>
          </Col>

          <Col >
                <Link className="nav-link" style={{fontSize:18}} to={url + "/overview"}>Overview</Link>
          </Col> 
          <Col>   
                <Link  className="nav-link"  style={{fontSize:18}} to={url + "/details"}>Details</Link>
          </Col>   
          <Col>
              <Link  className="nav-link"  style={{fontSize:18}} to={url + "/contributions"}>Contributions</Link>
          </Col>   
          <Col xsOffset={4}>  
                <a  className="nav-link"  style={{fontSize:18}} href={"/contribute/"+this.props.match.params.id}>  
                <Button bsStyle="info" style={{fontSize:18}}>Submit Idea</Button></a>
          </Col>   
  
        </Row>
    
          <hr />



        </Grid>


        <Route path={path+"/overview"} exact component={OverviewContest} />
        <Route path={path+"/contributions"} exact component={ContributionContest} />


        </div>
      </Router>
        
      );
    }
    return(
      <p>{this.state.error}</p>
    )
    }
  }