import React from 'react';
import Card from './Card';

const CardList = ({ games }) => {
  return (
    <div>
      {
        games.map((user, i) => {
          return (
            <Card 
              key={i} 
              image={games[i].GameImage} 
              title={games[i].GameTitle} 
              description={games[i].GameDescription} 
            />
          );
        })
      }
    </div>
  );
}

export default CardList;