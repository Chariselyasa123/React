import React, { Component } from 'react'

export class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Welcome to mobel ngeleg'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Jih ngapain main mobel ngeleg'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subrek</button>
            </div>
        )
    }
}

export default Message
