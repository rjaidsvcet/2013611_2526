import { Component } from "react";

class SetState extends Component {
    constructor (props) {
        super(props)

        this.state = {
            count : 0
        }
    }

    // incrementer () {
    //     // DO NOT USE THIS
    //     // this.state.count = this.state.count + 1
        
    //     // Callbacks not sync
    //     // this.setState({
    //     //     count : this.state.count + 1
    //     // }, ()=> {
    //     //     console.log(`Callback : ${this.state.count}`)
    //     // })
    // }

    incrementer () {
        this.setState ((prevState)=>({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }

    fiveIncrements () {
        this.incrementer()
        this.incrementer()
        this.incrementer()
        this.incrementer()
        this.incrementer()
    }

    render () {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>this.fiveIncrements()}>Increments</button>
            </>
        )
    }
}



export default SetState