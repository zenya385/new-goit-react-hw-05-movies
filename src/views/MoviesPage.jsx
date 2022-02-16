import { useEffect, useState } from 'react';
import queryString from 'qquery-string';
import * as API from '../services/API';
import { useHistory, useLocation } from 'react-router-dom';
import Form from 'components/Form/Form';
import { Link } from 'react-router-dom';
import s from '../components/';

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const search = queryString.parse(location.search);
  const { query } = search;

  const setSearchInp = input => {
    history.push({ pathname: '/movies', search: '?query=' + input });
  };

  useEffect(() => {
    query &&
      API.getSearchMovies(query)
        .then(setMovieSearch)
        .catch(error => setError(error.message));
  }, [query]);

  return (
    <>
      <Form setSearchInp={setSearchInp} />
      {!error ? (
        <ul>
          {movieSearch &&
            movieSearch.map(movie => (
              <li key={movie.id} style={{ margin: '10px', fontSize: '15px' }}>
                <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
        </ul>
      ) : (
        <p className={s['error']}>{error}</p>
      )}
    </>
  );
}
