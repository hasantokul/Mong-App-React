import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {getProfile} from "../../redux/actions/profileActions"


import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardImg, Badge, Input
  } from 'reactstrap';

import {Link} from "react-router-dom"

import React, { Component } from 'react'

class Info extends Component {

  componentDidMount(){
    this.props.getProfile()
  }
  

  render() {
    
    return (
      <div>
        <Link style = {{color:"white"}} to ="/songs"><Button style = {{fontSize : "1em"}} color = "dark">Songs</Button></Link>
      <Link style = {{color:"white"}} to ="/movies"><Button style = {{fontSize : "1em"}} color = "danger">Movies</Button></Link>
      <Card style = {{overflowX:"auto", marginTop:"0.5em",marginBottom:"10em"}}>
      
      <CardImg style = {{width : "100%", height : "auto"}} src = {this.props.profile.img}></CardImg>

        <CardBody>
          <CardTitle tag="h5">{this.props.profile.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Biography</CardSubtitle><br></br>
          <CardText><Badge style = {{fontSize : "1em"}} color = "dark">Age:</Badge> <strong>{this.props.profile.age}</strong> </CardText>
          <CardText><Badge style = {{fontSize : "1em"}} color = "dark">Country/City: </Badge><strong> {this.props.profile.location}</strong></CardText>
          <CardText><Badge style = {{fontSize : "1em"}} color = "dark">University: </Badge><strong>{this.props.profile.education}</strong></CardText>
          <CardText>{this.props.profile.summary}</CardText>
          <br></br>
          <Link style = {{color:"white"}} to="/edit_profile"><Button color="danger">Edit Profile</Button></Link>
          
        </CardBody>
      </Card>
      </div>
    )
  }
}


function mapStateToProps(state){

  return {
    profile : state.getProfileReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    getProfile: bindActionCreators(getProfile,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)
