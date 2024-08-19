import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${search}`)
      .then(response => response.json())
      .then(data => setCharacters(data.results || []));
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-7xl pb-3.5">Rick And Morty Characters</h1>    
      <div className="flex items-center mb-4">
        
        <input                 
          type="text"
          placeholder="Search characters"
          className="p-2 border font-bold text-amber-400 rounded-l"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => fetch(`https://rickandmortyapi.com/api/character?name=${search}`)}
          className="p-2 bg-amber-400 text-white font-bold rounded-r hover:bg-amber-500 transition"  > Search </button>
      </div>
      
      <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map(character => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <div className="p-2 border rounded mb-2">
              <h2 className = "italic text-xl font-semibold text-amber-800 hover:text-amber-400">{character.name}</h2>
              <img src={character.image}></img>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
