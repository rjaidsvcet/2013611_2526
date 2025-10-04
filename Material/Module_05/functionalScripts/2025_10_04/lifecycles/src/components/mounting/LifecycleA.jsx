import { Component } from "react"
import LifecycleB from "./LifecycleB"

class LifecycleA extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name : 'ASDF'
        }
        console.log('LifecycleA construtor called')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleA getDerivedStateFromProps called')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount called')
    }
    
    render () {
        console.log('LifecycleA render called')
        return (
            <>
                <h1>LifecycleA</h1>
                <LifecycleB />
            </>
        )
    }
}

export default LifecycleA