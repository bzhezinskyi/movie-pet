import MovieCard from 'components/MovieCard/MovieCard';
import MoviesSearchForm from 'pages/Movies/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/themoviedb.services';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState('');

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    const requestMoviesList = async () => {
      const data = await getSearchMovies({
        query: searchParams.get('query'),
      }).then();
      return setMoviesList(data.results);
    };
    requestMoviesList();
  }, [searchParams]);

  const createSearchParams = movies => {
    setSearchParams({ query: movies });
  };

  return (
    <>
      <MoviesSearchForm
        onSubmitForm={createSearchParams}
        searchParams={searchParams.get('query') ?? ''}
      />

      {moviesList !== '' && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {moviesList.map(movie => {
            return (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
}
