import { Badge, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectThema } from 'redux/thema/thema.selector';

export default function MovieCard({ movie }) {
  const location = useLocation();
  const thema = useSelector(selectThema);

  const data = new Date(
    movie.release_date ? movie.release_date : movie.first_air_date
  );
  const relisDay = `${data.getDate()}.${data.getDay()}.${data.getFullYear()}`;

  const voteAverage = movie.vote_average.toFixed(1);
  const voteAverageTxtColor =
    voteAverage >= 7.0 || voteAverage < 4.0 ? '' : 'dark';
  const voteAverageBgColor =
    (voteAverage >= 7.0 && 'success') ||
    (voteAverage >= 5.0 && 'warning') ||
    (voteAverage < 5.0 && 'danger');

  return (
    // bg="dark" text="light"
    <Card
      bg={thema === 'dark' ? 'dark' : ''}
      text={thema === 'dark' ? 'light' : ''}
    >
      <Link
        state={{ from: location }}
        to={`/${movie.media_type}/${movie.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <Card.Body style={{ minHeight: '6rem' }}>
          <Card.Title>{movie.title ? movie.title : movie.name}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Badge bg={voteAverageBgColor} text={voteAverageTxtColor}>
            {voteAverage}
          </Badge>
          <Badge bg="secondary">{relisDay}</Badge>
        </Card.Footer>
      </Link>
    </Card>
  );
}
