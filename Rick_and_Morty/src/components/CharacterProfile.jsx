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
    <div className="p-8 flex flex-col items-center text-center">
  <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
  <img
    src={character.image}
    alt={character.name}
    className="w-64 h-64 object-cover rounded-lg mb-4"
  />
  <p className="text-xl font-semibold">Gender: {character.gender}</p>
  <p className="text-xl font-semibold">Status: {character.status}</p>
  <p className="text-xl font-semibold">Species: {character.species}</p>
</div>
  );
}

export default CharacterProfile;
