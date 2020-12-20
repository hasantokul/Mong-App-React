import React, { useState,useEffect } from "react";
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
import{getProfile,editProfile} from "../../redux/actions/profileActions"
import {connect} from "react-redux"
import { createBrowserHistory } from 'history';

function EditProfile({getProfile,editProfile,history,...props}){
  
  
  const [profile,setProfile] = useState({...props.profile})
  
  
  useEffect(() => {
    
    setProfile({...props.profile})
    
  },[props.profile])
  
  const onImageChange = event => {
    if (event.target.files && event.target.files[0]){
      const name = "img"
      const img = event.target.files[0];
      setProfile(prev =>({
      ...prev,
      [name]: URL.createObjectURL(img)
    }))
  }
    
  };

  const onInfoChange = event => {
    const {name,value} = event.target;
    setProfile(prev =>({
      ...prev,
      [name]:value
    }))

  }

  const submitHandler = event => {
    
    editProfile(profile).then(()=>{
      history.push("/")
    })
    window.location.reload()
    event.preventDefault()
    
  }
  
  return (
      <div>
        <Form onSubmit={submitHandler} style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <img style={{border:"6px solid #ddd",borderRadius:"4px"}} width = "35%" height = "auto" src = {profile.img}></img>
          <FormGroup row>
            
            <Label style={{color:"white", fontSize:"1.5em"}} ><strong>Name</strong></Label>
            <Input onChange={onInfoChange} name="name" value={profile.name} type="text" />

            <Label style={{marginTop:"1em", color:"white", fontSize:"1.5em"}} for="examplePassword" ><strong>Age</strong></Label>
            <Input onChange={onInfoChange} name="age" value={profile.age} type="text"  />
            
            <Label style={{marginTop:"1em", color:"white", fontSize:"1.5em"}} for="examplePassword" ><strong>Education</strong></Label>
            <Input onChange={onInfoChange} name="education" value={profile.education} type="text"  />
            
            <Label style={{marginTop:"1em", color:"white", fontSize:"1.5em"}} for="exampleText" ><strong>Country/City</strong></Label>
            <Input onChange={onInfoChange} name="location" value={profile.location} type="text" name="location" />

            <Label style={{marginTop:"1em", color:"white", fontSize:"1.5em"}} for="exampleText" ><strong>Summary</strong></Label>
            <Input onChange={onInfoChange} name="summary" value={profile.summary} type="textarea"  />
            
            <Label style={{marginTop:"1em", color:"white", fontSize:"1.2em"}} for="exampleFile" ><strong>Profile Image</strong></Label>
            <Input onChange={onImageChange} style={{color:"white", fontSize:"1.2em"}} type="file" name="file" id="exampleFile" />
            <br></br>
            {/* <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div className="custom-file">
              <input type="file" class="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"/>
              <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div> */}
            
            
            <Button color="danger" type="submit" style={{marginTop:"1em"}}>Save</Button>

          </FormGroup>
        </Form>
      </div>
    );
  }


function mapStateToProps(state){

  return {
    profile : state.getProfileReducer
  }
}

const mapDispatchToProps = {
  getProfile,
  editProfile
}

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)