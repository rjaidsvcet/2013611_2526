import React, { Component } from 'react'

export default class Forms extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username : '',
       textarea : ''
    }
  }

  usernameHandler = event => {
    this.setState({
      username : event.target.value
    })
  }

  textareaHandler = event => {
    this.setState ({
      textarea : event.target.value
    })
  }

  submitData = event => {
    console.log(`Username : ${this.state.username}`)
    console.log(`Textarea : ${this.state.textarea}`)
    event.preventDefault()
  }

  render() {

    const {username, textarea} = this.state

    return (
      <>
        <form onSubmit={this.submitData}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={this.usernameHandler}></input>
            </div>
            <div>
                <label>Text Area</label>
                <textarea value={textarea} onChange={this.textareaHandler}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}
