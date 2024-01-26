import { Route, Routes } from 'react-router-dom';

import Home from 'Pages/Home';
import Movies from 'Pages/Movies';
import Header from './Header/Header';
import NotFoundPage from './../Pages/NotFoundPage';
import MovieDetails from 'Pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
