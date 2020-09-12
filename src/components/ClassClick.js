import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('Ahhh aku di pencet');
    }
    render() {
        return (
            <div>
                <h1>Pencet tombol dibawah dong :</h1>
                <button onClick={this.clickHandler}>Click Aku DOngsz</button>
            </div>
        )
    }
}

export default ClassClick
