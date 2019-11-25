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
    posts:[],temp:[],desc:[]
  }

  componentDidMount(){
    axios.get(
      'http://api.openweathermap.org/data/2.5/weather?q=London&?units=metric&APPID=e890e5f43e3114ad60f6c64ccacbd4e3'
      )
    .then(response => {
      const posts = response.data;
      const temp = response.data.main;
      const desc =  response.data.weather[0];
      console.log(response.data);
      this.setState({posts:posts, temp: temp, desc: desc});
    });

  }
  render(){
    return(
<div className="App">
     <Weather name={this.state.posts.name} temp={this.state.temp.temp}
      min={this.state.temp.temp_min} max={this.state.temp.temp_max}
      desc={this.state.desc.main} />
    </div>

    );
  }
}




export default App;
