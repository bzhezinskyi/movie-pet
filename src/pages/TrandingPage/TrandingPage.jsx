import { getTrending } from 'services/themoviedb.services';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import MovieCard from 'components/MovieCard/MovieCard';
import { useSearchParams } from 'react-router-dom';
import TrendingFilter from 'components/TrendingFilter/TrendingFilter';
import { useSelector } from 'react-redux';
import { selectThema } from 'redux/thema/thema.selector';

export default function TrandingPage() {
  const [trandingList, setTrandingList] = useState();
  const thema = useSelector(selectThema);

  const [searchParams] = useSearchParams({
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

  if (!trandingList) {
    return;
  }

  return (
    <>
      <h1 style={{ color: thema === 'dark' ? '#fff' : '#000' }}>У тренді</h1>
      <TrendingFilter />
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
