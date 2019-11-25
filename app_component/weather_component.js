import React from 'react';

const weather =(props) =>{
    return(
        <div className="container">
            <div className="cards">
            <h1>{props.name}</h1>
            <h5 className="py-4">
            <i class="wi wi-day-sunny display-1"></i>
            </h5>
            <h1 className="py-2">
                {props.temp}&deg;
            </h1>
            {/* {show max and min temp} */}
            <h3>
                <span className="px-4">{props.min}&deg;</span>
                <span className="px-4">{props.max}&deg;</span>
            </h3>
            <h4 className="py-3">{props.desc}</h4>
            </div>
        </div>
    )


   
}

export default weather;