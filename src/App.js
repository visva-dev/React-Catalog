import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import CharacterScreen from './screens/CharacterScreen';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { selectCharacter } from './features/characterSlice';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

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
          <Navbar />
          <HomeScreen characters={characters} />
          <Footer />
        </Route>
        <Route exact path='/character/:id'>
          {character ? (
            <>
              <Header />
              <Navbar />
              <CharacterScreen />
              <Footer />
            </>
          ) : (
            <Redirect path='/' />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
