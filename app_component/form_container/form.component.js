import React from 'react';
import './form.style.css';

class Form extends React.Component{

state={
    lang:"hello"
}
handleLangChange = (e) =>{
    var lang = this.state.lang;
    this.props.onSelectLanguage(e,lang);
}
    render(){
       
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
                    <button className="btn btn-warning" onClick={this.handleLangChange}>Get Weather</button>
                    </div>
                </div>
                </form>   
            </div>
        )
    }
    }
    


export default Form;