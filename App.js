import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather_component';
import './App.css';

//api call api api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key ="e890e5f43e3114ad60f6c64ccacbd4e3";

class App extends React.Component{
  state={
    posts:[],temp:[],desc:[],weathericon:undefined
  };

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

  componentDidMount(){
    axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e890e5f43e3114ad60f6c64ccacbd4e3'
      )
    .then(response => {
      const posts = response.data;
      const temp = response.data.main;
      const desc =  response.data.weather[0];
      console.log(response.data);
      this.setState({posts:posts, temp: temp, desc: desc, weathericon:this.weathericon.Thunderstorm});
    });
  }
  render(){
    return(
<div className="App">
     <Weather name={this.state.posts.name} temp={this.calCelsius(this.state.temp.temp)}
      min={this.calCelsius(this.state.temp.temp_min)} max={this.calCelsius(this.state.temp.temp_max)}
      desc={this.state.desc.main} className={this.state.weathericon}/>
    </div>

    );
  }
}




export default App;
