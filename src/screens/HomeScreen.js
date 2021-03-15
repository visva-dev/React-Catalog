import React, { useState } from 'react';
import Character from '../components/Character';
import './HomeScreen.css';

function HomeScreen({ characters }) {
  const [value, setValue] = useState(12);

  const handleShowMore = () => {
    setValue(value + 12);
  };

  return (
    <div className='CharactersContainer'>
      {characters.map(
        (character, index) =>
          index < value && (
            <Character character={character} key={character.id} />
          )
      )}
      {value < characters.length && (
        <button className='button' onClick={handleShowMore}>SHOW MORE</button>
      )}
    </div>
  );
}

export default HomeScreen;
