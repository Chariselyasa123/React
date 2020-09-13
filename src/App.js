import React, { Component } from 'react'
import './App.css'
import FragmenDemo from './components/FragmenDemo'
import Table from './components/Table'

class App extends Component {
    render() {
        return (
            <div className="App">
               <FragmenDemo />
               <Table />
            </div>
        )
    }
}

export default App
