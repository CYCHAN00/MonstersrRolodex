import './Card.styles.css';

import React from 'react';

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
