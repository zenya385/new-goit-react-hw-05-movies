import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/API';

export default function HomePage() {
  const [trandingList, setTrendingList] = useState([]);

  useEffect(() => {
    API.getTrendingMovies().then(setTrendingList);
  }, []);

  return (
    <>
      <h1>Trendihg today</h1>
      <ul>
        {trandingList.map(movie => (
          <li key={movie.id} style={{ margin: '10px', fontSize: '15px' }}>
            <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
