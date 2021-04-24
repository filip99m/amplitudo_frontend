import React from "react";

const myName = "Filip";
const greeting = () => {
    console.log("Hello");
}

const FuncComponent = () => {

   return <div>
                <h1>Hello {myName}</h1>
                <button onClick={() => greeting()}>Click me</button>
            </div>
}

export default FuncComponent;