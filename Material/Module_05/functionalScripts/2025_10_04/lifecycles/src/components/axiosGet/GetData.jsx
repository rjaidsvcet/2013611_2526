import React, { Component } from 'react'
import axios from 'axios'

class GetData extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            posts : [],
            error : ''
        }
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then (res => {
                console.log(res)
                this.setState ({
                    posts : res.data
                })
            })  
            .catch (error => {
                console.log(error)
                this.setState ({
                    error : 'Some generic error'
                })
            })
    }

    render() {
        const { posts, error } = this.state
        return (
            <>
                <h1>
                    Lists of Posts
                    {
                        posts.length ?
                        posts.map (p => <div key={p.id}>{p.title}</div>) :
                        null
                    }
                    {
                        error ?
                        <div>{error}</div> :
                        null
                    }
                </h1>
            </>
        )
    }
}

export default GetData