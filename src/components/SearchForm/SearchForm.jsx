import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectThema } from 'redux/thema/thema.selector';

export default function SearchForm({ onSubmitForm, searchParams }) {
  const [searchValue, setSearchValue] = useState('');
  const thema = useSelector(selectThema);

  useEffect(() => {
    setSearchValue(searchParams);
  }, [searchParams]);

  const handleChangeForm = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (searchValue !== '') {
      onSubmitForm(searchValue);
    }
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Control
        className="mt-3"
        type="text"
        value={searchValue}
        onChange={handleChangeForm}
        placeholder="Movie name"
      />

      <Button
        className="mt-3"
        disabled={searchValue === ''}
        variant={thema === 'dark' ? 'dark' : 'primary'}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
