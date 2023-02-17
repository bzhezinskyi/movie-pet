import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMoviesId } from 'services/themoviedb.services';
import { Container, Poster, StyledLink } from './MovieDetails.styled';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'revies', text: 'Reviews' },
];

export default function MovieDetails() {
  const { movieId, mediaType } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const createMovie = async () => {
      await getMoviesId({ movieId: movieId, mediaType }).then(setMovie);
    };
    createMovie();
  }, [movieId, mediaType]);

  if (!movie) {
    return;
  }
  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go back</Link>

      <Container>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
          <p>User Score : {movie.vote_average}</p>
          <h3>Overviev</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </Container>

      <p>Additional information</p>
      <>
        {navItems.map(({ href, text }) => (
          <StyledLink
            key={href}
            to={href}
            state={{ from: location.state?.from ?? '/' }}
          >
            {text}
          </StyledLink>
        ))}
      </>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
