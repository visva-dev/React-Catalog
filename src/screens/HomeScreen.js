import React, { useState } from 'react';
import Character from '../components/Character';

function HomeScreen({ characters }) {
  const [value, setValue] = useState(12);

  const handleShowMore = () => {
    setValue(value + 12);
  };

  return (
    <>
      {characters.map(
        (character, index) =>
          index < value && (
            <Character character={character} key={character.id} />
          )
      )}
      {value < characters.length && (
        <button onClick={handleShowMore}>SHOW MORE</button>
      )}
    </>
  );
}

export default HomeScreen;
