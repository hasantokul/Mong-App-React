import React, { useState } from 'react'
import {addFavoriteActor} from "../../redux/actions/favoritesActions"
import { connect } from "react-redux";

function AddActor({addFavoriteActor,history}) {


    const [actor,setActor] = useState({})

    const changeHandler = (e) =>{
        const {name,value} = e.target
        setActor(({
            ...actor,
            [name]:value
        }))
    }

    const submitHandler = (e) =>{
        addFavoriteActor(actor).then(() =>{
            history.push("/")
          })
          e.preventDefault()
    }

    return (
        <div style={{marginTop:"4em"}}>
        <h3 style={{color:"white"}}>Add Favorite Actor</h3>
        <form onSubmit={submitHandler} style={{marginTop:"2em"}}>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Actor Image URL</strong> </label>
            <input onChange={changeHandler} name="img" type="text" class="form-control" placeholder="Enter Image URL"/>
            
        </div>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Actor Name</strong> </label>
            <input onChange={changeHandler} name="name" type="text" class="form-control" placeholder="Enter Actor Name"/>
            
        </div>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Actor Age</strong> </label>
            <input onChange={changeHandler} name="age" type="text" class="form-control" placeholder="Enter Actor Age"/>
            
        </div>
        <div class="form-group">
            <label style={{fontSize:"1.5em",color:"white"}} ><strong>Actor Home Town</strong> </label>
            <input onChange={changeHandler} name="location" type="text" class="form-control" placeholder="Enter Actor Hometown"/>
            
        </div>
        
        
        <button type="submit" class="btn btn-danger">Save</button>
        </form>
    </div>
    )
}
const mapDispatchToProps = {
    addFavoriteActor
}

export default connect(null,mapDispatchToProps)(AddActor)