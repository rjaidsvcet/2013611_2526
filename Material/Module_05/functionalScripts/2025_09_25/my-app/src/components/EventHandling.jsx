function EventHandling() {

    const clickHandler = () => {
        console.log('Button clicked from functional component')
    }

  return (
    <>
        <button onClick={clickHandler}>Function button</button>
    </>
  )
}

// import React, { Component } from 'react'

// export class EventHandling extends Component {
    
//     clickHandler () {
//         console.log('Button clicked from Class Component')
//     }
    
//     render() {
//     return (
//         <>
//             <button onClick={this.clickHandler}>Generic Button</button>        
//         </>
//     )
//     }
// }

export default EventHandling