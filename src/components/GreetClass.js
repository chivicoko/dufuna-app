import React, {Component} from 'react';


class GreetClass extends Component {
    render() {
        return (
            <h1>{this.props.message}. I am Victor</h1>
        )
    }
}


export default GreetClass;