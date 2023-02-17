import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb.services';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    const createMovie = async () => {
      await getMoviesId({
        movieId: movieId,
        detail: '/reviews',
      }).then(setMovieReviews);
    };
    createMovie();
  }, [movieId]);

  if (!movieReviews) {
    return;
  }
  return (
    <div>
      {movieReviews.results.length === 0 ? (
        <h3>We don't have any reviews for this movie</h3>
      ) : (
        <ul>
          {movieReviews.results.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
