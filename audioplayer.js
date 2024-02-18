import React, { useState } from 'react';
import axios from 'axios';

const AudioPlayer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=YOUR_API_KEY`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="audio-player">
      <input
        type="text"
        placeholder="Search for a song..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.snippet.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AudioPlayer;
