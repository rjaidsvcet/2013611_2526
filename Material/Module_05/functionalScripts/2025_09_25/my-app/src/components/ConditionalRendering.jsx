import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }

    render () {
        // First Approach
        // if (this.state.isLoggedIn) {
        //     return <h1>Known user</h1>
        // } else {
        //     return <h1>Unknown user</h1>
        // }

        // Second Approach
        // let result
        // if (this.state.isLoggedIn) {
        //     result = <h1>Known</h1>
        // } else {
        //     result = <h1>Unknown</h1>
        // }

        // return result

        // Third Approach
        return this.state.isLoggedIn ?
            <h1>Known user</h1> :
            <h1>Unknown user</h1>
    }
}

export default ConditionalRendering