import React from 'react';

const Characters = ({items}) => {
  return (
    <div className='row card-container'>
      {items.map(item => (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div className="c-card">
          <div className="c-card__head">
            <img src={item.image} />
          </div>
          <div className="c-card__body">
            <p className="c-card__name mb-1">{item.name}</p>
            <p className="c-card__specie">{item.species}</p>
            {(() => {
              if (item.status == "Alive") {
                return (<p className="c-card__status">{item.status}</p>)
              } else if (item.status == "Dead") {
                return (<p className="c-card__status isDead">{item.status}</p>)
              } else if (item.status == "unknown") {
                return (<p className="c-card__status isUnknown">{item.status}</p>)
              }
            })()}
            <p className="c-card__origin">{item.origin.name}</p>
          </div>
        </div>
      </div>
      ))}
  </div>)
};

export default Characters;
