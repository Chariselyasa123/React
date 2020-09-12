import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             coments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = e =>{
        this.setState({
            username: e.target.value
        })
    }

    handleComentChange = e => {
        this.setState({
            coments: e.target.value
        })
    }

    handleTopicChange = e => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        alert(`${this.state.username} ${this.state.coments} ${this.state.topic}`)
        e.preventDefault()
    }
    
    render() {
        const {username, coments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Coments</label>
                    <textarea value={coments} onChange={this.handleComentChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
