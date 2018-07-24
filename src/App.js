//import React, { Component } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to goohub-GUI</h1>
        </header>
			<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<p className="hello">Hello, {props.name}</p>
		</div>
    );
}

export default App;
