import { useEffect, useState } from 'react';
import queryString from 'query-string';
import * as API from '../../services/API';
import { useHistory, useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [movieSearch, setMovieSearch] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const search = queryString.parse(location.search);
  const { query } = search;

  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input }); // {pathname: ""/gallery, search: "?query=cat", hash: "#eruyiu", state: undefined}
  };


  useEffect(() => {
    query &&
      API.getSearchMovies(query)
        .then(setMovieSearch)
        .catch(error => setError(error.message));
    setError('');
  }, [query]);

  console.log(search);

  return (
    <>
      <Form setSearch={setSearch} />
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
