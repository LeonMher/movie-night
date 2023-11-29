import { Link } from 'react-router-dom';
const MovieCard = ({ movie }: any) => {
  return (
    <div key={movie.id} className="container">
      <Link to={`/details/${movie.id}`}>
        <div className="movie-wrapper">
          <h1>{movie.title ? movie.title : movie.name}</h1>
          <p>{movie.overview.slice(0, 200)}...</p>

          <p>Rating - {movie.vote_average}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={`${movie.title || movie.name} Backdrop`}
          />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
