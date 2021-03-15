import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import { selectCharacter } from '../features/characterSlice';
import './CharacterScreen.css';

function CharacterScreen() {
  const character = useSelector(selectCharacter);

  return (
    <div className='ScreenContainer'>
      {' '}
      <CharacterCard character={character} />
    </div>
  );
}

export default CharacterScreen;
