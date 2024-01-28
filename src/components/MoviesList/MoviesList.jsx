import { useLocation } from 'react-router-dom';
import { Item, List, MovieLink, MovieTitle } from './MoviesList.styled';
import defaultImgPoster from '../Image/default-poster.jpeg';

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
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : defaultImgPoster
                  }
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
