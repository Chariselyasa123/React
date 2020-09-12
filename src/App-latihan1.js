import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
// import Inline from './components/Inline';
// import List from './components/List';
// import Welcome from './components/Welcome'
// import {HelloJSX} from './components/Hallo'
// import {HelloGaPakeJSX} from './components/Hallo'
import Message from './components/Message'
// import Stylesheet from './components/Stylesheet';
// import ParrentComponent from './components/ParrentComponent';
// import UserGreetings from './components/UserGreetings';
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
import './appStyle.css'
// import style from './appStyle.module.css'

function App_latihan1() {
  return (
    <div className="App-latihan1">
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
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParrentComponent /> */}
      {/* <UserGreetings /> */}
      {/* <List /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={style.success}>Success</h1> */}
    </div>
  );
}

export default App_latihan1;
