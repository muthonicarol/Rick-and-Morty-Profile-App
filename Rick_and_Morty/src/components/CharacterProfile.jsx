import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CharacterProfile() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="p-4 ">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-48 h-48 object-cover rounded font-bold" />
      <p>Gender:{character.gender}</p>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}

export default CharacterProfile;
