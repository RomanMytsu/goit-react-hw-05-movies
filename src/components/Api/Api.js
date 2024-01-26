import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'b4bd07f1e94011ce6ac66467073c8fb1',
};

export const getTrending = async () => {
  const { data } = await axios.get('trending/all/day?');

  return data.results;
};

export const getMovieId = async id => {
  const { data } = await axios.get(`movie/${id}?`);
  return data;
};

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   params: { api_key: 'b4bd07f1e94011ce6ac66467073c8fb1' },
// });

// export const getTrending = () => {
//   return instance.get('trending/all/day?');
// };

// export const getMovieId = id => {
//   return instance.get(`movie/${id}?`);
// };
