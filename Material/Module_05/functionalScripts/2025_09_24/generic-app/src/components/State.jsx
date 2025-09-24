import { Component } from "react";

class State extends Component {
    constructor () {
        super ()
        this.state = {
            'message' : 'This is a message from state'
        }
    }

    changeState () {
        this.setState({
            'message' : 'Message has been changed'
        })
    }

    render () {
        return (
            <>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.changeState()}>Click</button>
            </>
        )
    }
}

export default State