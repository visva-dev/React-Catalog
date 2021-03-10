import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';
import Login from './Login';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
