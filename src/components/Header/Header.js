import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Searchbar } from "../Searchbar/Searchbar";
import {FCSwitch} from '../FCSwitch/FCSwitch';


export class Header extends Component{

    render(){
      
        return(
          
  <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#">Weather App</Navbar.Brand>
  <div className='currentCity'>Currently showing:{this.props.cityInfo.name} </div>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <Searchbar searchedCity={this.props.searchedCity} setSearchedCityState={this.props.setSearchedCityState}  />
    <FCSwitch changeTempValute={this.props.changeTempValute}/>
  </Navbar.Collapse>
</Navbar>

        )


    }
    
    
}
