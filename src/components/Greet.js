import React from 'react';


// 1. traditional way to create a functional component
// function Greet() {
//     return (
//         <h1>My First Reactjs App with TypeScript</h1>
//     )
// }

// 2. using arrow functions
// const Greet = () => {
//     return <h1>This is my first js App using the functional component (the arrow function)</h1>
// }

// 3. using props (properties) to make it more dynamic instead of just static
const Greet = (props) => {
    return (<h1>{props.message}</h1>)
}
// 'message' is a property for Greet declared in the App.js file in the return statement

export default Greet;
