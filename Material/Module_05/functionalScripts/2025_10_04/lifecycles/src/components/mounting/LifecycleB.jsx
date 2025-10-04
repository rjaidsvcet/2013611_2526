import { Component } from "react"

class LifecycleB extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name : 'ASDF'
        }
        console.log('LifecycleB construtor called')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleB getDerivedStateFromProps called')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount called')
    }
    
    render () {
        console.log('LifecycleB render called')
        return (
            <>
                <h1>LifecycleB</h1>
            </>
        )
    }
}

export default LifecycleB