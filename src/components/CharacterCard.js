/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.css';

function CharacterCard({ character }) {
  const locations = [
    character?.bornLocation,
    character?.diedLocation,
    character?.homeworld,
  ];

  const updateLocations = (value, index, self) => self.indexOf(value) === index;

  return (
    <div className="CardContainer">
      <img src={character?.image} alt="" />
      <div className="CharacterInfo">
        <h1>{character?.name}</h1>
        <h4>{character?.affiliations?.length > 0 && 'AFFILIATIONS'}</h4>
        {character?.affiliations?.map((affiliation, index) => (
          <p key={index}>{affiliation}</p>
        ))}
        <h4>{character?.apprentices?.length > 0 && 'APPRENTICES'}</h4>
        {character?.apprentices?.map((apprentice, index) => (
          <p key={index}>{apprentice}</p>
        ))}
        <h4>
          {(character?.bornLocation && 'LOCATIONS')
            || (character?.diedLocation && 'LOCATIONS')
            || (character?.homeworld && 'LOCATIONS')}
        </h4>
        {locations.filter(updateLocations).map(location => (
          <p>{location !== '' && location}</p>
        ))}
        <h4>GENDER</h4>
        <span>{character?.gender}</span>
        <h4>DIMENSIONS</h4>
        <span>
          Height:
          {character?.dimensions}
          m
        </span>
        <h4>SPECIES</h4>
        <span>{character?.species}</span>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.node.isRequired,
};

export default CharacterCard;
