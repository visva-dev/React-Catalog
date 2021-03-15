import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import About from './About';
import CharacterScreen from './screens/CharacterScreen';
import { useSelector } from 'react-redux';
import { selectCharacter } from './features/characterSlice';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const character = useSelector(selectCharacter);

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch(
        'https://akabab.github.io/starwars-api/api/all.json'
      );
      let data = await res.json();
      setCharacters(data);
    }

    fetchCharacters();
  }, [character]);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <HomeScreen characters={characters} />
        </Route>
        <Route exact path='/character/:id'>
          {character ? (
            <>
              <Header />
              <CharacterScreen />
            </>
          ) : (
            <Redirect path='/' />
          )}
        </Route>
        <Route>
          <About about={About}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
