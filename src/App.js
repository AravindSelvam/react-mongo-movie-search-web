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
