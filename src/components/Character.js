import React from 'react';

const Character = ({items}) => {
  return (
    <section className='cards'>
      {items.map(item => (
          <h1>{item.name}</h1>
      ))}
  </section>)
};

export default Character;
