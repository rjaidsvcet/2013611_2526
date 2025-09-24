import { createElement } from "react"

const JSX = () => {
    // Using JSX
    // return (
    //     <div>
    //         <h1>Hello using JSX</h1>
    //     </div>
    // )

    return createElement (
        'div',
        {id : 'genericId', className : 'genericClass'},
        createElement (
            'h1',
            null,
            'Hello not using JSX'
        )
    )
}

export default JSX