import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather_component';
import Form from './app_component/form.component';
import './App.css';

//api call api api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key ="e890e5f43e3114ad60f6c64ccacbd4e3";

class App extends React.Component{
  state={
    posts:[],temp:[],desc:[],id:null,
    weathericon:undefined,
    getweather:false
  };

get_weather =(rangeid)=>{
  console.log(rangeid);
  if(rangeid >= 200 && rangeid <= 232){
    this.setState({weathericon:this.weathericon.Thunderstorm});
  }
  else if(rangeid >=300 && rangeid <=321){
  this.setState({weathericon:this.weathericon.Drizzle});
  }
  else if(rangeid >=500 && rangeid <=531){
    this.setState({weathericon:this.weathericon.Rain});
    }
    else if(rangeid >=600 && rangeid <=622){
      this.setState({weathericon:this.weathericon.Snow});
      }
      else if(rangeid >=701 && rangeid <=781){
        this.setState({weathericon:this.weathericon.Atmosphere});
        }
        else if(rangeid === 800){
          this.setState({weathericon:this.weathericon.Clear});
          }
        else if(rangeid >=801 && rangeid <=804){
          this.setState({weathericon:this.weathericon.Clouds});
          }

}

  weathericon = {
    Thunderstorm : "wi wi-thunderstorm display-1",
    Drizzle:'wi wi-sleet display-1',
    Rain:'wi wi-storm-showers display-1',
    Snow:'wi wi-snow display-1',
    Atmosphere:'wi wi-fog display-1',
    Clear:'wi wi-day-sunny display-1',
    Clouds:'wi wi-day-fog display-1'
  };

calCelsius(temp){
  let cell = Math.floor(temp-273.15);
  return cell;
}

gettingweather=(id)=>{
  // e.preventDefault();
// let state = this.state.getweather;
// //  id = this.state.id;
// console.log(this.state.getweather);
console.log(id);
// this.setState({getweather:!state,id:id});
console.log("true is updated"+ id);
}


  componentDidMount (){
    axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Leh&APPID=e890e5f43e3114ad60f6c64ccacbd4e3'
      )
    .then(response => {
      const posts = response.data;
      const temp = response.data.main;
      const desc =  response.data.weather[0];
      console.log(response.data);
      this.setState({posts:posts, temp: temp, desc: desc});
      this.get_weather(desc.id);
      
          });
        }
  render(){
    
    return(
<div className="App">
  <Form gettingweather={this.gettingweather.bind(this,"che")}/>
  {
  this.state.getweather ? 
      <Weather name={this.state.posts.name} temp={this.calCelsius(this.state.temp.temp)}
      min={this.calCelsius(this.state.temp.temp_min)} max={this.calCelsius(this.state.temp.temp_max)}
      desc={this.state.desc.main} className={this.state.weathericon}/> : null
  }
    </div>

    );
  }
}




export default App;
