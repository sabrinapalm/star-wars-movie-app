import React from 'react';

const SearchBar = ({ search }) => {
  return (
    <>
      <span className='fa fa-search'></span>
      <input className='search-field' type='text' placeholder='Type to search...' onChange={e => search(e.target.value)} />
    </>
  );
};

export default SearchBar;
