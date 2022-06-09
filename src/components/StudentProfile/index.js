import React from 'react';
import SearchBar from '../SearchBar';
import Students from '../Students';
import './index.css'

export default function index() {
  return (
    <div className='student-profile'>
        <SearchBar searchType='name'/>
        <SearchBar searchType='tag'/>
        <Students />
    </div>
  )
}
