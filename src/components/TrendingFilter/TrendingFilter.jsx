import { Button, ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectThema } from 'redux/thema/thema.selector';

export default function TrendingFilter() {
  const thema = useSelector(selectThema);
  const btnColor =
    thema === 'dark'
      ? { active: 'dark', secondary: 'outline-dark' }
      : { active: 'primary', secondary: 'outline-primary' };

  const [searchParams, setSearchParams] = useSearchParams({
    timeWindow: 'day',
    mediaType: 'movie',
  });
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

  return (
    <div className="d-flex justify-content-evenly mb-3">
      <ButtonGroup>
        <Button
          variant={
            searchParams.get('timeWindow') === 'day'
              ? btnColor.active
              : btnColor.secondary
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
              ? btnColor.active
              : btnColor.secondary
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
              ? btnColor.active
              : btnColor.secondary
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
              ? btnColor.active
              : btnColor.secondary
          }
          onClick={() => handleSearchParams({ type: 'mediaType', value: 'tv' })}
        >
          Суріали
        </Button>
        <Button
          variant={
            searchParams.get('mediaType') === 'all'
              ? btnColor.active
              : btnColor.secondary
          }
          onClick={() =>
            handleSearchParams({ type: 'mediaType', value: 'all' })
          }
        >
          Все
        </Button>
      </ButtonGroup>
    </div>
  );
}
