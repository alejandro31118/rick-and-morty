import React, { useState } from 'react';
import '../main.css';

const Search = ({getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

  return (
    <form>
      <input type='text' className='form-control mb-4' placeholder='Search characters' value={text} onChange={(e) => onChange(e.target.value)} autoFocus />
    </form>
  );
};

export default Search;