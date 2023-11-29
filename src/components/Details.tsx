import React from "react";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const searchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=0be7424a27f0af5781298c93d2d56e50&append_to_response=videos,images`;

  const { isFetching, error, data } = useQuery({
    queryKey: ["movie-details"], // Include searchQuery in the query key
    queryFn: () =>
      fetch(searchUrl).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movie data");
        }
        return res.json();
      }),
  });
  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data.title, " whats data");
  return (
    <div className='container'>
      <div className='movie-wrapper'>
        <h1>{data.title ? data.title : data.name}</h1>
        <p>{data.overview}</p>
        <p>Rating - {data.vote_average}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={`${data.title || data.name} Backdrop`}
        />
        <p>Release Date: {data.release_date}</p>
      </div>
    </div>
  );
};

export default Details;
