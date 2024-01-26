import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MoviesList';
import { getTrending } from 'components/Api/Api';
import toast from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        setError(false);
        const results = await getTrending();
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div>
      {loading && <p>...LOADING</p>}
      <h2>Trending today</h2>
      {error &&
        !loading &&
        toast.error('Error loading movies. Please try again later.')}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
