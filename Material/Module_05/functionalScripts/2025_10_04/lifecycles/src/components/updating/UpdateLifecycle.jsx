import React, { Component } from 'react'

class UpdateLifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      console.log('Constructor')
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('shouldComponentUpdate called')
        return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate called')
        return null
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('componentDidUpdate called')
    }

  render() {
    console.log('render called')
    return (
      <>
        <h2>Updating</h2>
        <p>Count : {this.state.count}</p>
        <button onClick={()=>this.setState({
            count : this.state.count + 1
        })}>
            Increment
        </button>
      </>
    )
  }
}

export default UpdateLifecycle