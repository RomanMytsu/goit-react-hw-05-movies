import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'b4bd07f1e94011ce6ac66467073c8fb1' },
});

export const getTrending = () => {
  return instance.get('trending/all/day?');
};

export const getMovieId = id => {
  return instance.get(`movie/${id}?`);
};

export const getCastId = id => {
  return instance.get(`movie/${id}/credits`);
};

export const getReviewsId = id => {
  return instance.get(`movie/${id}/reviews`);
};

export const getMovieSearch = query => {
  return instance.get(`search/movie?query=${query}`);
};
