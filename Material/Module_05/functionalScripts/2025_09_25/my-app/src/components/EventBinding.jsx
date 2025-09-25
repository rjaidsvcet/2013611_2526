import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler () {
    //     this.setState ({
    //         message : 'Goodbye'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message : 'Goodbye'
        })
    }

    render() {
        return (
        <>
            <h1>{this.state.message}</h1>
            <button onClick={this.clickHandler}>Click</button>      
        </>
        )
    }
    }

export default EventBinding