import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather_component';
import './App.css';

//api call api api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key ="e890e5f43e3114ad60f6c64ccacbd4e3";

class App extends React.Component{
  state={}
  render(){
    return(
<div className="App">
     <Weather/>
    </div>

    );
  }
}




export default App;
