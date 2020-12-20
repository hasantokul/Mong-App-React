import React, { Component } from 'react'
import {Badge} from 'reactstrap';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getFavoriteActors,getFavoriteSingers,deleteFavoriteActor,deleteFavoriteSinger} from "../../redux/actions/favoritesActions"
import {Link} from "react-router-dom"

class Favorites extends Component {

  componentDidMount(){
    this.props.getFavoriteActors()
    this.props.getFavoriteSingers()
  }

  deleteSinger(id){
    this.props.deleteFavoriteSinger(id)
    window.location.reload()
  }

  deleteActor(id){
    this.props.deleteFavoriteActor(id)
    window.location.reload()
  }

  render() {

    
    return (
    <div style={{marginBottom:"3em"}}>
        
      <h3 style = {{ marginTop:"2em",color:"white"}}>Favorites</h3>
      <br></br>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h5 style = {{color:"white"}}>Favorite Singers & Groups</h5>
       <Link to="add_singer"><a class = "btn btn-danger">+ Add New</a></Link> 
      </div>
      <br></br>
      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
          {
            this.props.singers.map(singer => (
              
              <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img  class="card-img-top" src={singer.img} alt="Card image cap"/>
                  <div class="card-body">
                    <h3>{singer.name}</h3>
                    <h5><Badge style={{marginRight:"0.5em"}} color = "dark"> Age/Date :</Badge>{singer.age}</h5>
                    <h5><Badge style={{marginRight:"0.5em"}} color = "dark"> Home Town :</Badge>{singer.location}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      
                      <button onClick={()=>this.deleteSinger(singer.id)} type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            
            ))
          }
          </div>
        </div>
      </div>
      <div style={{marginTop:"5em",display:"flex",justifyContent:"space-between"}}>
        <h5 style = {{color:"white"}}>Favorite Actors & Actresses</h5>
        <Link to="add_actor"><a class = "btn btn-danger">+ Add New</a></Link>
      </div>
      <br></br>
      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
      {
        this.props.actors.map(actor => (
          
          <div class="col-md-4">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" src={actor.img} alt="Card image cap"/>
            <div class="card-body">
              <h3>{actor.name}</h3>
              <h5><Badge style={{marginRight:"0.5em"}} color = "dark"> Age :</Badge>{actor.age}</h5>
              <h5><Badge style={{marginRight:"0.5em"}} color = "dark"> Home Town :</Badge>{actor.location}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 
                  <button onClick={()=>this.deleteActor(actor.id)} type="button" class="btn btn-sm btn-outline-danger">Delete</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      
        ))
      }
          </div>
        </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps(state){
  return{
    singers: state.favoriteSingerReducer,
    actors: state.favoriteActorReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    getFavoriteActors: bindActionCreators(getFavoriteActors,dispatch),
    getFavoriteSingers: bindActionCreators(getFavoriteSingers,dispatch),
    deleteFavoriteSinger:bindActionCreators(deleteFavoriteSinger,dispatch),
    deleteFavoriteActor:bindActionCreators(deleteFavoriteActor,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);