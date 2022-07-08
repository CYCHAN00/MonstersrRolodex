import React from 'react';
import Card from './ Card';
import './CardList.styles.css';
const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id}></Card>;
      })}
    </div>
  );
};

export default CardList;
