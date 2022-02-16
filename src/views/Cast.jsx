import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/API';

export default function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    API.getMovieCast(movieId).then(setCastList);
  }, [movieId]);

  return (
    <ul>
      {castList?.map(cast => (
        <li key={cast.cast_id}>
          {cast.profile_path && (
            <img
              style={{ width: '100px' }}
              src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
              alt={cast.name}
            />
          )}
          <h2>{cast.name}</h2>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
}
