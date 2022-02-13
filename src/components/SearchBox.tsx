import React from 'react';

const SearchBox = ({ searchChanges }: any) => {
    return (<div className='pa2'>
        <input onChange={searchChanges} type="search" placeholder="Search robots" className='pa3 ba b--green bg-lightest-blue' />
    </div>)
}

export default SearchBox;