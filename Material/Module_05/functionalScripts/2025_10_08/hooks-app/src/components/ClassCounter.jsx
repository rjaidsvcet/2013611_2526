import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count : 0
        }
    }

    componentDidMount () {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate (prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <>
                <button onClick={()=>this.setState({count : this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
            </>
        )
    }
}

export default ClassCounter