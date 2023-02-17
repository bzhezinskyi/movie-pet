import { Badge, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const location = useLocation();

  const data = new Date(
    movie.release_date ? movie.release_date : movie.first_air_date
  );
  const relisDay = `${data.getDate()}.${data.getDay()}.${data.getFullYear()}`;

  return (
    <Card>
      <Link
        state={{ from: location }}
        to={`/${movie.media_type}/${movie.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Body style={{ height: '8rem' }}>
          <Card.Title>{movie.title ? movie.title : movie.name}</Card.Title>
          <Card.Text>
            <>
              <Badge
                className="me-5"
                bg={
                  movie.vote_average.toFixed(1) >= 7.0 ? 'success' : 'warning'
                }
                text={movie.vote_average.toFixed(1) >= 7.0 ? '' : 'dark'}
              >
                {movie.vote_average.toFixed(1)}
              </Badge>
              {relisDay}
            </>
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
