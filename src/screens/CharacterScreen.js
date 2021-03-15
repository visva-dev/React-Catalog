import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import { selectCharacter } from '../features/characterSlice';

function CharacterScreen() {
  const character = useSelector(selectCharacter);

  return <CharacterCard character={character} />;
}

export default CharacterScreen;
