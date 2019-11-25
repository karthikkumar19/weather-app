import React from 'react';
import './form.style.css';

const Form = (props) =>{

//    function getweather(e){
//     e.preventDefault();
//         console.log("form is submitted");
    
    
    return(
        <div className="container">
            <form>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country" />
                </div>
                <div className="col-md-3">
                <button className="btn btn-warning" onClick={props.gettingweather}>Get Weather</button>
                </div>
            </div>
            </form>   
        </div>
    )
}


export default Form;