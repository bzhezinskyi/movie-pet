import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function MoviesSearchForm({ onSubmitForm, searchParams }) {
  const [searchValue, setSearchValue] = useState('');

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
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
