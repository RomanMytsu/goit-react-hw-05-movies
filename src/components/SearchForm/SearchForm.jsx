import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { BtnForm, Form, Input } from './SearchForm.styled';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };

  const handleSearch = () => {
    searchParams({ query: query });
  };


  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        name="query"
        autoFocus
        autoComplete="off "
        placeholder="Enter movie"
        required
        onChange={handleChange}
      />
      <BtnForm type="submit">Search</BtnForm>
    </Form>
  );
};

export default SearchForm;
