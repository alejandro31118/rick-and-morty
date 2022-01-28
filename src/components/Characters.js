import React from 'react';
import CharInfo  from './CharInfo';

const Characters = ({items}) => {
  return (
    <div className='row card-container'>
      {items.map(item => (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="c-card" onClick={CharInfo}>
          <div className="c-card__head">
            <img src={item.image} />
          </div>
          <div className="c-card__body">
            <p className="c-card__name mb-1">{item.name}</p>
            <p className="c-card__specie">{item.species}</p>
            <p className="c-card__status">{item.status}</p>
            <p className="c-card__origin">{item.origin.name}</p>
          </div>
        </div>
      </div>
      ))}
  </div>)
};

export default Characters;
