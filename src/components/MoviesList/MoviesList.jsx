import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={original_title}
                />
                <p>{original_title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
