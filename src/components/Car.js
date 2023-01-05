import React from "react";


const Car = (props) => {
    return (
        <div>
            <h3>The brand of this car is {props.brand}</h3>
            <h3>The model of this car is {props.model}</h3>
            <h3>The color of this car is {props.color}</h3>
            <h3>The year of manufacture for this car is {props.year}</h3>
        </div>
    )
}

export default Car;