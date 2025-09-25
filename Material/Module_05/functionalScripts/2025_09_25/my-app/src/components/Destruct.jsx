import React, { Component } from 'react'

export class Destruct extends Component {
    render() {
    
    const {name, heroName} = this.props

    return (
        <>
        <h1>Hello {name} alias {heroName}</h1>
        </>
    )
    }
}

export default Destruct