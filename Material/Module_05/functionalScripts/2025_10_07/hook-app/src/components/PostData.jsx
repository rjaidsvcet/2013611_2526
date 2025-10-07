import axios from 'axios'
import React, { Component } from 'react'

class PostData extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            id : '',
            title : '',
            body : ''
        }
    }

    changeHandler = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    submitData = e => {
        e.preventDefault ()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const {id, title, body} = this.state

        return (
            <>
                <form onSubmit={this.submitData}>
                    <div>
                        <input 
                            type='text'
                            name='id'
                            value={id}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type='text'
                            name='title'
                            value={title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type='text'
                            name='body'
                            value={body}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type='submit'>Click</button>
                </form>
            </>
        )
    }
}

export default PostData