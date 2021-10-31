import React, { Component, Fragment } from "react";
import { SingleWeatherDayCard } from "../SingleWeatherDayCard/SingleWeatherDayCard";
import { getWeatherForFiveDays } from "../../services/weatherDaysComunicator";
import { Header } from "../Header/Header";
import {Loading} from "../Loader/Loading";



export class MainPage extends Component{
 state={
     listOfDays:[],
     cityInfo:{},
     today:new Date(this.settingTime()).getTime(),
     day1:null,
     day2:null,
     day3:null,
     day4:null,
     day5:null,
     day6:null,
     searchedCity:'Novi Sad',
     errorMsg:'',
     CF:true
 }

 settingTime(){
     const day=new Date().getDate();
     const month=new Date().getMonth()+1;
     const year=new Date().getFullYear();
     return (`${year}/${month}/${day}`);
 }

 setSearchedCityState=(word)=>{
   
     this.setState({searchedCity:word})
     
    
 }

  handleErrors(response) {
    if (response.cod !=200) {
        throw Error(response.message);
    }
    return response;
}


  getWetherForCity(){
      
    const result=getWeatherForFiveDays(this.state.searchedCity)
    .then(this.handleErrors)
    .then((res)=>this.setState({cityInfo:res.city,listOfDays:res.list},
      
     ()=>{
       console.log(this.state.listOfDays)
         const day1Arr=[];
         const day2Arr=[];
         const day3Arr=[];
         const day4Arr=[];
         const day5Arr=[];
         const day6Arr=[];
         this.state.listOfDays.map((item)=>{
             const localDate=new Date(item.dt_txt).toLocaleDateString();
             let k=(new Date(localDate).getTime()-this.state.today)/(1000 * 3600 * 24);
              console.log()
            
             if(new Date(localDate).getTime()==this.state.today){
                 day1Arr.push(item);
             }
             else if(Math.round((new Date(localDate).getTime()-this.state.today)/(1000 * 3600 * 24))==1){
                 day2Arr.push(item);
             }
 
             else if(Math.round((new Date (localDate).getTime()-this.state.today)/(1000 * 3600 * 24))==2){
                 day3Arr.push(item);
             }
 
             else if(Math.round((new Date(localDate).getTime()-this.state.today)/(1000 * 3600 * 24))==3){
                 day4Arr.push(item);
             }
 
             else if(Math.round((new Date(localDate).getTime()-this.state.today)/(1000 * 3600 * 24))==4){
                 day5Arr.push(item);
             }
 
             else if(Math.round((new Date(localDate).getTime()-this.state.today)/(1000 * 3600 * 24))==5){
                 day6Arr.push(item);
             }
 
         })
         this.setState({
             day1:day1Arr,
             day2:day2Arr,
             day3:day3Arr,
             day4:day4Arr,
             day5:day5Arr,
             day6:day6Arr})
     
     },()=>{console.log(this.state.day3,3)}))
     .catch(res=>{console.log('er',res)
       this.setState({errorMsg:res.message});
    
    })
 
    
    
 }



  componentDidMount(){
  
    this.getWetherForCity();

  };

  componentDidUpdate(prevProps,prevState){
    
      if(this.state.searchedCity!==prevState.searchedCity){
           this.getWetherForCity();
           this.setState({errorMsg:''});

      }
   
   }

   changeTempValute(){
    this.setState({CF:!this.state.CF},()=>console.log(this.state.CF))
}

    render(){
      console.log(this.state.day2)
        return(
        
        <Fragment >
   
         <Header searchedCity={this.state.searchedCity} cityInfo={this.state.cityInfo} changeTempValute={()=>this.changeTempValute()} setSearchedCityState={(word)=>this.setSearchedCityState(word)} />
         {this.state.listOfDays.length <1 && (<Loading /> )}
         {this.state.day2 && (
         <div>
         {this.state.errorMsg && (<div>{this.state.errorMsg}</div>)}
         <SingleWeatherDayCard  item={this.state.day1} CFStatus={this.state.CF}/>
         <SingleWeatherDayCard  item={this.state.day2} CFStatus={this.state.CF}/>
         <SingleWeatherDayCard  item={this.state.day3} CFStatus={this.state.CF}/>
         <SingleWeatherDayCard  item={this.state.day4} CFStatus={this.state.CF}/>
         <SingleWeatherDayCard  item={this.state.day5} CFStatus={this.state.CF}/>
         <SingleWeatherDayCard  item={this.state.day6} CFStatus={this.state.CF}/>
         </div>
         
         )}
         
         </Fragment>
        )


    }
    
    
}


