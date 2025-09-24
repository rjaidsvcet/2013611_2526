// Functional - Stateless
// function Props (props) {
//     return (
//         <>
//             <h2>Hello {props.name}</h2>
//         </>
//     )
// }

import { Component } from "react";

// Class-driven - Stateful
class Props extends Component {
    render () {
        return (
            <>
                <h1>Hello {this.props.name}</h1>
            </>
        )
    }
}

export default Props