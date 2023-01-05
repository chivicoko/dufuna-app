import React from "react";


export const sayHello = () => {
    alert("Hello Dufuna!");
}

const HelloButton = () => {
    return(
        <button onClick={sayHello}>Hello</button>
    );
}

export default HelloButton;