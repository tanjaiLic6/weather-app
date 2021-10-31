import { URL_5DAYS_BY_NAME } from "../constants/endpoints";
import { API_KEY } from "../constants/apiKey";
export const getWeatherForFiveDays=(cityName)=>{
  
   return fetch(URL_5DAYS_BY_NAME+(cityName)+API_KEY)
    .then(response =>{ console.log(response); return response.json()})
   
    .then(data => { return data})
    .catch(error=>{ console.log(error); throw Error(error)});
    
     
   

}

// console.log(response);