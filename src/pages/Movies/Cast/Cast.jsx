import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb.services';
import { Photo } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const createMovie = async () => {
      await getMoviesId({
        movieId: movieId,
        detail: '/credits',
      }).then(setMovieCast);
    };
    createMovie();
  }, [movieId]);

  if (!movieCast) {
    return;
  }
  return (
    <div>
      {movieCast.cast.length === 0 ? (
        <h3>We don't have any cast for this movie</h3>
      ) : (
        <ul>
          {movieCast.cast.map(({ name, character, id, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <Photo
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={name}
                />
              )}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
