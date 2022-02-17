import { lazy, Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import * as API from '../../services/API';
import s from './MovieDetailsPage.module.css';
const Cast = lazy(() => import('../../views/Cast'));
const Reviews = lazy(() => import('../../views/Reviews'));

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    API.getMovieDetails(movieId).then(setMovieDetail);
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location.state.from);
  };

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        GoBack
      </button>
      <div className={s['movie-detail']}>
        {movieDetail.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
          />
        )}
        <div className={s['movie-detail-info']}>
          <h1>{movieDetail.original_title}</h1>
          <p>User scores: {movieDetail.vote_average}</p>

          <h2>Overview</h2>
          <p>{movieDetail.overview}</p>
          <h3>Genres</h3>
          {movieDetail.genres && (
            <p>{movieDetail.genres.map(genre => genre.name).join(' ')}</p>
          )}
        </div>
      </div>
      <hr></hr>
      <div className={s['movie-detail-additional']}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: {
                  from: location.state?.from || '/',
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: {
                  from: location.state?.from || '/',
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr></hr>
      <Suspense fallback={<h1>Waiting...</h1>}>
        <Route path={`/movies/:movieId/cast`}>
          <Cast />
        </Route>
        <Route path={`/movies/:movieId/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
