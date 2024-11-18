import React from 'react';

function Card({ card, onAddToDeck }) {
  return (
    <div key="search">
      <img src={card.imageUrl} width={223} height={310} alt={card.name} />
      <p>{card.name}</p>
      <p>{card.type}</p>
      <p>{card.text}</p>
      <button onClick={() => onAddToDeck(card)}>Добавить в колоду</button>
    </div>
  );
}

export { Card };
