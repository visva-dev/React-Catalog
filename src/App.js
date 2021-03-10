import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Router>
      <div className="App">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {isMenuOpen && <Menu />}
      </div>
    </Router>
  );
}

export default App;
