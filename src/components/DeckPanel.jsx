import React from 'react';

function DeckPanel({ deck, onRemoveFromDeck }) {
    return (
        <div className="content">
            <div id="cardsContainer">
                <h1 className='contentHeader'>Ваша колода</h1>
                <div style={{ display: 'block' }}> 
                    {deck.map((card, index) => (
                        <div key={index} style={{ position: 'relative', margin: '5px', display: 'flex', alignItems: 'center' }} onClick={() => onRemoveFromDeck(card)}>
                            <img src={card.imageUrl} width={100} height={140} alt={card.name} />
                            <span style={{
                                marginLeft: '10px', 
                                background: 'rgba(255, 255, 255, 0.8)', padding: '2px 5px'
                            }}>
                                {card.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { DeckPanel };
