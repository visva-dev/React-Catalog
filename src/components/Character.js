import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCharacter } from '../features/characterSlice';
import './Character.css';

function Character({ character }) {
  const dispatch = useDispatch();

  const handleCharacter = () => {
    if (character.id) {
      dispatch(
        setCharacter({
          id: character.id,
          name: character.name,
          image: character.image,
          affiliations: character.affiliations,
          apprentices: character.apprentices,
          bornLocation: character.bornLocation,
          diedLocation: character.diedLocation,
          homeworld: character.homeworld,
          gender: character.gender,
          dimensions: character.height,
          species: character.species,
          masters: character.masters,
          wiki: character.wiki,
        }),
      );
    }
  };

  return (
    <div className="CharacterContainer">
      <Link to={`/character/${character.name}`} onClick={handleCharacter}>
        <img
          src={
            character.id === 28
              ? (character.image = 'https://static.wikia.nocookie.net/starwars/images/4/46/Monmothma.jpg/revision/latest?cb=20070615234013')
              : character.id === 77
                ? (character.image = 'https://static.wikia.nocookie.net/starwars/images/8/8b/SanHillHS-AOTC.png/revision/latest?cb=20200730024920')
                : character.image
          }
          alt={character.name}
        />
      </Link>
      <Link to={`/character/${character.id}`} onClick={handleCharacter}>
        <h1>{character.name}</h1>
      </Link>
    </div>
  );
}

export default Character;
