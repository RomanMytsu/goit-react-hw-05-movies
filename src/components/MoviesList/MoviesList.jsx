import { useLocation } from 'react-router-dom';
import { Item, List, MovieLink, MovieTitle } from './MoviesList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <MovieTitle>{title}</MovieTitle>
              </MovieLink>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default MovieList;
