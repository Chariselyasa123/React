import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Charis'
        }
        console.log('LifecyleB constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleB getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecyleB componentDidMount');
    }
    
    shouldComponentUpdate() {
        console.log('LifecyleB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecyleB getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifecyleB componentDidUpdate');
    }

    render() {
        console.log('LifecyleB Render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB
