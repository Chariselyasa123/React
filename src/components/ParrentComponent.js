import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParrentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(adek){
        alert(`Hello ${this.state.parentName} dari ${adek}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParrentComponent
