import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import Info from "../profile/Info"
import Favorites from '../profile/Favorites'
import {Switch,Route, Router} from "react-router-dom"
import Songs from "../lists/Songs"
import Movies from '../lists/Movies'
import EditProfile from "../profile/EditProfile"
import AddMovie from '../adding/AddMovie'
import AddSong from '../adding/AddSong'
import AddSinger from '../adding/AddSinger'
import AddActor from '../adding/AddActor'

export default class Body extends Component
{
    render()
    {
        return (
        <div style = {{marginTop:"1em"}}>
            <Container>
                <Row>
                    <div class="col-lg-3">
                        <h3 style = {{color: "white",marginBottom : "1em"}}>Profile</h3>
                        
                        <Info></Info>
                    </div>
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-8">
                        <Switch>
                            <Route path = "/" exact component = {Favorites}></Route>
                            <Route path = "/songs" exact component = {Songs}></Route>
                            <Route path = "/movies" exact component = {Movies}></Route>
                            <Route path = "/add_movie" exact component = {AddMovie}></Route>
                            <Route path = "/add_song" exact component = {AddSong}></Route>
                            <Route path = "/edit_profile" exact component = {EditProfile}></Route>
                            <Route path = "/add_singer" exact component = {AddSinger}></Route>
                            <Route path = "/add_actor" exact component = {AddActor}></Route>

                        </Switch>
                    </div>
                </Row>
            </Container>
        </div>
		)
	}
}
