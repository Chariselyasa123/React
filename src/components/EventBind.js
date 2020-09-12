import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Helloo'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'goodbye'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: 'Hayoo ngapain?'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click sayaaa</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click sayaaa</button> */}
                <button onClick={this.clickHandler}>Click sayaaa</button>
            </div>
        )
    }
}

export default EventBind
