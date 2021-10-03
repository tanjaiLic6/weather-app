import React, { Component, Fragment } from "react";
import Card from 'react-bootstrap/Card';
import { Row ,Container,Col} from "react-bootstrap";
import { getCelsiusFromKelvin } from "../utilitis/getCelsiusFromKelvin";
import { iconSizeSmall } from "../../constants/iconSize";
import { URL_ICON } from "../../constants/endpoints";
import '../SingleWeatherDayCard/SingleWeatherDayCard.css'



export class SingleWeatherDayCard extends Component{
 
    render(){
       const date=!!this.props.item.length?this.props.item[0].dt_txt : new Date();
       const datenum=new Date(date).toLocaleDateString('en-GB');
       const time=new Date(date).getUTCHours();
      
    
        return(

         
     <Fragment>
      {!!this.props.item.length&&
           (<Container>
              <h3>{datenum}</h3> 
              

            <Row>
            {this.props.item.map((item)=>{
               const hours=new Date(item.dt_txt);
               return (
               <Col lg={true}> 
                <div className='border card'>
                 <p>Time:{(new Date(hours).getHours()==0)?'24h':new Date(hours).getHours()+'h'}</p>
                 <span>Temperature:{getCelsiusFromKelvin(item.main.temp).toFixed(0)}° </span>
                 <p>{item.weather[0].main}</p>
                 <img src={URL_ICON+item.weather[0].icon+iconSizeSmall}></img>
                
                
                 </div>
                 </Col>)})}
            
            </Row>
           
          </Container> 
           )}
           </Fragment>
        )


    }
    
    
}