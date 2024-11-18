import React, { useState } from 'react';

function Card({ card }) {
  return (
    <div key="search">
      <img src={card.imageUrl} width={223} height={310}/>
      <p>{card.name}</p>
      <p>{card.type}</p>
      <p>{card.text}</p>
    </div>
  );
}

export {Card};