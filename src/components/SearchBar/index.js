import React, { useState, useContext, useEffect } from 'react';
import './index.css';
import { studentContext } from '../../context/appContext';


export default function SearchBar({ searchType }) {
  const { searchNames, searchTags } = useContext(studentContext);
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
  const submitSearch = (e) => {
    e.preventDefault();
    if (searchType === 'name') {
      searchNames(searchValue);
    } else if (searchType === 'tag') {
      searchTags(searchValue);
    }
    setSearchValue('');
  }

  useEffect(() => {
    if (searchType === 'name') {
      searchNames(searchValue);
    } else if (searchType === 'tag') {
      searchTags(searchValue);
    }
  },[searchValue]);
  return (
    <div className='search-bar'>
      <form className='searchbar-form' onSubmit={submitSearch}>
        <input type="text" className='search-input' placeholder={`Search by ${searchType}`} value={searchValue} onChange={handleChange} />
      </form>
    </div>
  )
}
