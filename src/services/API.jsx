import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.apiKey = 'fab0cbb87abcbce926512aacf2cf85c2';

const getTrendingMovies = () => {
  axios.defaults.params = {
    api_key: 'f02791c07431f6e71112b21384bb0659',
  };
  return axios
    .get('/trending/movie/day')
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};

const getSearchMovies = (query, page = 1) => {
  axios.defaults.params = {
    api_key: 'f02791c07431f6e71112b21384bb0659',
    query,
    page,
  };

  return axios
    .get(`/search/movie`)
    .then(({ data }) => {
      if (!data.results.length) {
        throw new Error('Are you 18 already?');
      }

      return data.results;
    })
    .catch(err => {
      throw err;
    });
};

const getMovieDetails = movie_id => {
  return axios
    .get(`/movie/${movie_id}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

const getMovieReviews = (movie_id, page = 1) => {
  axios.defaults.params = {
    api_key: 'f02791c07431f6e71112b21384bb0659',
    page,
  };
  return axios
    .get(`/movie/${movie_id}/reviews`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

const getMovieCast = movie_id => {
  axios.defaults.params = {
    api_key: 'f02791c07431f6e71112b21384bb0659',
  };
  return axios
    .get(`/movie/${movie_id}/credits`)
    .then(({ data }) => data.cast)
    .catch(err => {
      throw err;
    });
};

export {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieReviews,
  getMovieCast,
};
