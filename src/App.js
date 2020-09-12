import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
// import Welcome from './components/Welcome'
// import {HelloJSX} from './components/Hallo'
// import {HelloGaPakeJSX} from './components/Hallo'
import Message from './components/Message'
// import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Counter /> */}
      <Greet name="Charis" heroName="Superman" />
      {/* <Greet name="Elyasa" heroName="Batman" /> */}
      {/* <Greet name="Ahmad" heroName="Wondrman"/> */}
      {/* <Welcome name="Charis" heroName="Superman"/> */}
      {/* <Welcome name="Elyasa" heroName="Batman"/> */}
      {/* <Welcome name="Ahmad" heroName="Wondrman"/> */}
      {/* <HelloJSX />
      <HelloGaPakeJSX /> */}
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
