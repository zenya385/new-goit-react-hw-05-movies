import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import * as API from '../services/API';

export default function HomePage() {
  const [trandingList, setTrendingList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    API.getTrendingMovies().then(data => setTrendingList(data));
  }, []);

  return (
    <>
      <h1>Trendihg today</h1>
      <ul>
        {trandingList.map(movie => (
          <li key={movie.id} style={{ margin: '10px', fontSize: '15px' }}>
            <Link
              to={{ pathname: `movies/${movie.id}`, state: { from: location } }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
