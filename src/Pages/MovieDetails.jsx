import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { getMovieId } from './../components/Api/Api';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSelectedMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovieId(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getSelectedMovie();
  }, [movieId]);

  return (
    <>
      {loading && <p>...LOADING</p>}
      {error && !loading && toast.error('Movie not found.')}
      {movie && <MovieInfo movie={movie} />}
    </>
  );
};

export default MovieDetails;
