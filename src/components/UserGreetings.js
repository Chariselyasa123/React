import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return(
            this.state.isLoggedIn ? 
            <div>Ape luh hah?</div> :
            <div>Met Dateng</div>
        )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Ape luh hah?</div>
        // }else{
        //     message = <div>Met Dateng</div>
        // }
        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Ape luh hah?</div>
        //     )
        // }else{
        //     return(
        //         <div>Met Dateng</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Ape luh hah?</div>
        //         <div>Met Dateng</div>
        //     </div>
        // )
    }
}

export default UserGreetings
