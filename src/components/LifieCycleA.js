import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifieCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Charis'
        }
        console.log('LifecyleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecyleA componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifecyleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecyleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifecyleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
    
    render() {
        console.log('LifecyleA Render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifieCycleA
