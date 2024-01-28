import { useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import toast from 'react-hot-toast';

import { getMovieId } from './../components/Api/Api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';
import { LinkStyled } from 'components/Header/Header.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchSelectedMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getMovieId(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchSelectedMovie();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && !loading && toast.error('Movie not found.')}
      <NavLink to={goBack.current}>Go back</NavLink>
      {movie && <MovieInfo movie={movie} />}

      <ul>
        <li>
          <LinkStyled to="cast">Cast</LinkStyled>
        </li>
        <li>
          <LinkStyled to="reviews">Reviews</LinkStyled>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
