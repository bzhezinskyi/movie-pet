import { getTrending } from 'services/themoviedb.services';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import MovieCard from 'components/MovieCard/MovieCard';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const [trandingList, setTrandingList] = useState();
  const [searchParams, setSearchParams] = useSearchParams({
    timeWindow: 'day',
    mediaType: 'movie',
  });

  useEffect(() => {
    const createTrandingList = async () => {
      const data = await getTrending({
        mediaType: searchParams.get('mediaType'),
        timeWindow: searchParams.get('timeWindow'),
      }).then();
      return setTrandingList(data.results);
    };
    createTrandingList();
  }, [searchParams]);
  const handleSearchParams = ({ type, value }) => {
    switch (type) {
      case 'mediaType':
        setSearchParams({
          timeWindow: searchParams.get('timeWindow'),
          mediaType: value,
        });
        break;
      case 'timeWindow':
        setSearchParams({
          mediaType: searchParams.get('mediaType'),
          timeWindow: value,
        });
        break;

      default:
        break;
    }
  };

  if (!trandingList) {
    return;
  }

  return (
    <>
      <h1>У тренді</h1>
      <ButtonGroup>
        <Button
          variant={
            searchParams.get('timeWindow') === 'day'
              ? 'primary'
              : 'outline-primary'
          }
          onClick={() =>
            handleSearchParams({ type: 'timeWindow', value: 'day' })
          }
        >
          Сьогодні
        </Button>
        <Button
          variant={
            searchParams.get('timeWindow') === 'week'
              ? 'primary'
              : 'outline-primary'
          }
          onClick={() =>
            handleSearchParams({ type: 'timeWindow', value: 'week' })
          }
        >
          Цього тижня
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          variant={
            searchParams.get('mediaType') === 'movie'
              ? 'primary'
              : 'outline-primary'
          }
          onClick={() =>
            handleSearchParams({ type: 'mediaType', value: 'movie' })
          }
        >
          Фільми
        </Button>
        <Button
          variant={
            searchParams.get('mediaType') === 'tv'
              ? 'primary'
              : 'outline-primary'
          }
          onClick={() => handleSearchParams({ type: 'mediaType', value: 'tv' })}
        >
          Суріали
        </Button>
        <Button
          variant={
            searchParams.get('mediaType') === 'all'
              ? 'primary'
              : 'outline-primary'
          }
          onClick={() =>
            handleSearchParams({ type: 'mediaType', value: 'all' })
          }
        >
          Все
        </Button>
      </ButtonGroup>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {trandingList.map(movie => {
          return (
            <Col key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
