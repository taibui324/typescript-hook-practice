import React from 'react';
import UseStateExample from "./UseState";
import UseRefExample from "./UseRef";
import UseReducerExample from "./UseReducer";
import UseEffect from "./UseEffect";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    
          <UseStateExample />

          <UseRefExample />

          <UseReducerExample />

          <UseEffect />
      </header>
    </div>
  );
}

export default App;
