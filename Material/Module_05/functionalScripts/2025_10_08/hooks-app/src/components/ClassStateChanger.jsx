import React, { Component } from 'react'

class ClassStateChanger extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count : 0,
            name : ''
        }
    }

    componentDidMount () {
        document.title = `Clicked ${this.state.count} times`
    }

    // componentDidUpdate (prevProp, prevState) {
    //     console.log('Input value has been triggered')
    //     document.title = `Clicked ${this.state.count} times`
    // }

    componentDidUpdate (prevProp, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Input value has been triggered')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <>
                <input 
                    type='text'
                    value={this.state.name}
                    onChange={e => {
                        this.setState({
                            name : e.target.value
                        })
                    }}
                />
                <button onClick={() => this.setState({
                    count : this.state.count + 1
                })}>
                    Clicked {this.state.count} times
                </button>
            </>
        )
    }
}

export default ClassStateChanger