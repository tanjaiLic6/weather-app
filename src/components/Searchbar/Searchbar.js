import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


export class Searchbar extends Component{
    state={
       searchedWord:'',
      
       
      
    }

    
   
     ontype =(event)=>{
         event.preventDefault();
         console.log(event.target.value);
         this.setState({searchedWord:event.target.value})
         
         
    }
  
    updateCityAndDelteInput=()=>{
        if(this.state.searchedWord!==''){
        this.props.setSearchedCityState(this.state.searchedWord);
        this.setState({searchedWord:''});};
    }
   
   

    render(){
       
        
        return(
      
                <Form className="d-flex" >
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                    onChange={this.ontype}
                    value={this.state.searchedWord}
                    onKeyPress={(e) => { if(e.key === 'Enter'&& this.state.searchedWord!=='') {e.preventDefault(); this.updateCityAndDelteInput()}  }}
                    
                />
                <Button variant="outline-success"
                 onClick={this.updateCityAndDelteInput}
                
                >Search</Button>
                </Form>

        )


    }
    
    
}