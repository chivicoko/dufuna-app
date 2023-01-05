import React, {Component} from "react";

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        // this.increaseCount = this.increaseCount.bind(this);
        // this.decreaseCount = this.decreaseCount.bind(this);
    }

    // using the arrow function style automatically binds the methods (no need for the binding above)
    increaseCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }
    decreaseCount = () => {
        this.setState((prevState) => ({count: prevState.count - 1}));
    }

    render() {
        return (
            <div>
                <h1>Counter Current Value is: {this.state.count}</h1>
                <button onClick={this.increaseCount}>Add 1</button> &nbsp;
                <button onClick={this.decreaseCount}>Deduct 1</button>
            </div>
        )
    }
}

export default Counter;