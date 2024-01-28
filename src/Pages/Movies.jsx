import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

import MovieList from 'components/MoviesList/MoviesList';
import toast from 'react-hot-toast';
import { getMovieSearch } from 'Api/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchSearch = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getMovieSearch(query);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [query]);

  return (
    <>
      {loading && <p>...LOADING</p>}
      {error && !loading && toast.error('Movie not found.')}
      <SearchForm />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
