// import Container from 'components/Container/Container';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import NotFoundView from 'views/NotFoundView';
import AppNav from 'components/AppNav/AppNav';
import { Suspense } from 'react';

export default function App() {
  return (
    <>
      <AppNav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}
