import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Edit from './pages/Edit.jsx';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
		  <Route path="/contact" component={Contact}/>
		   <Route path="/edit/:id" component={Edit}/>
        </div>
      </Router>
    );
  }
}

export default App;
