import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Home = () => {
  const apiKey = '0be7424a27f0af5781298c93d2d56e50';
  const append = 'append_to_response=videos,images';
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&${append}`;
  const [searchQuery, setSearchQuery] = useState('');

  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}&${append}`;

  const apiUrl = searchQuery ? searchUrl : trendingUrl;

  const StyledInput = styled.input`
    height: 30px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  `;

  const { isFetching, error, data } = useQuery({
    queryKey: ['movieData', searchQuery],
    queryFn: () =>
      fetch(apiUrl).then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch movie data');
        }
        return res.json();
      }),
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (isFetching) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        ref={(input) => input && input.focus()}
        onChange={handleSearchChange}
      />
      {data.results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        data.results.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
};

export default Home;
