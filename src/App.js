import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import {HelloJSX} from './components/Hallo'
import {HelloGaPakeJSX} from './components/Hallo'

function App() {
  return (
    <div className="App">
      <Greet name="Charis" heroName="Superman"><p>Ini bawahan prop</p></Greet>
      <Greet name="Elyasa" heroName="Batman"> <button>Submit</button></Greet>
      <Greet name="Ahmad" heroName="Wondrman"/>
      <Welcome name="Charis" heroName="Superman"/>
      <Welcome name="Elyasa" heroName="Batman"/>
      <Welcome name="Ahmad" heroName="Wondrman"/>
      {/* <HelloJSX />
      <HelloGaPakeJSX /> */}
    </div>
  );
}

export default App;
