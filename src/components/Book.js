import React, {Component} from "react";

class Book extends Component {

    constructor(props) {
        super(props)

        // state object
        this.state = {
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            publisher: "Oxford"
        }
    }

    render() {
        return(
            <div>
                <h2>The title of this book is {this.state.title}</h2>
                <h2>The author of this book is {this.state.author}</h2>
                <h2>The publisher of this book is {this.state.publisher}</h2>
                <br></br>
            </div>
        )
    }
}

export default Book;