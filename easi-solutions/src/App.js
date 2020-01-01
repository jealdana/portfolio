import React, {useState} from 'react';
import './App.css';
import Assets from './components/Assets.js'
import Graphs from './components/Graphs.js'
// Lessons learned: state hooks, handlers, preventDefault function, filter function, map function 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg'>
        <ul className='navbar-nav'>
          <li className='nav-item mr-3'>
            <Link to="/">Graphs</Link>
          </li>
          <li className='nav-item mr-3'>
            <Link to="/about">About</Link>
          </li>
          <li className='nav-item mr-3'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Graphs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Assets/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <BasicExample />
    
    
    </div>
  );
}

export default App;
