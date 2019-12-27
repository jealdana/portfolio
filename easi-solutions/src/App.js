import React, {useState} from 'react';
import './App.css';
import Assets from './components/Assets.js'
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
      <div className='navbar navbar-light bg-light'>
        <ul>
          <li className='nav-item'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/about">About</Link>
          </li>
          <li className='nav-item'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

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
