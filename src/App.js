import React from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './components/movie/movie';
import ShowMovie from './components/movie/show-movie';

import {BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'


function App() {
  
  
  return (

    <Router>
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie">Movie</Link>
        </li>
        <li>
          <Link to="/show-movie">Show Movie</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/movie">
        <Movie/>
      </Route>

      <Route path="/show-movie">
        <ShowMovie/>
      </Route>
      <Route path="**">
      <Movie/>
      </Route>
    </Switch>

    </div>
    </Router>
    
  );
}

export default App;
