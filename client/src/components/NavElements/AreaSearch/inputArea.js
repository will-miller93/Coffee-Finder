// import react
import React from 'react';

// simple input field for typing in a search area
const AreaSearch = () => (
    <form className='form-inline my-2 my-lg-0'>
        <input className='form-control mr-sm-2' type='search' placeholder='Search for a city' aria-label='search'></input>
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
    </form>
)

// dont forget to export this component
export default AreaSearch;