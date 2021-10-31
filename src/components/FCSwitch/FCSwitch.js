import React, { Component } from "react";
import Button from 'react-bootstrap/Button';



export class FCSwitch extends React.Component{
   
    
   

    render(){
      
        return(

            <Button className='btn-secondary' onClick={()=>this.props.changeTempValute()}  > <span>C</span>/<span>F</span></Button>
        )


    }
    
    
}
