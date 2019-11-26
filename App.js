import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather_container/weather';
import Form from './app_component/form_container/form.component';
import './App.css';

//api call api api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key ="e890e5f43e3114ad60f6c64ccacbd4e3";

class App extends React.Component{
  state={
    clicked:false
  }
  componentDidMount(){ 
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Madurai&APPID=e890e5f43e3114ad60f6c64ccacbd4e3')
    .then(response => {
        console.log(response);
    })

}

handleLanguage = (e,langValue) =>{
  e.preventDefault();
console.log(langValue);

}



  render(){
    
    return(
<div className="App">
  <Form onSelectLanguage={ this.handleLanguage} />
  <Weather check={this.state.clicked}/>  
    </div>

    );
  }
}




export default App;
