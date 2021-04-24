import React from 'react';

class ClassComponent extends React.Component{
    greeting(){
        console.log("hello")
    }
    render(){
        const myName = "Filip"
        return <div>
                <h1>Hello {myName}</h1>
                <button onClick={this.greeting}>Click me</button>
            </div>

    }


}

export default ClassComponent;