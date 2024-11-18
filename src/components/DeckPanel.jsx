import React from 'react';

function DeckPanel({ deck, onRemoveFromDeck }) {
    return (
        <div className="content">
            <div id="cardsContainer">
                <h1 className='contentHeader'>Ваша колода</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {deck.map((card, index) => (
                        <div key={index} style={{ position: 'relative', margin: '5px' }} onClick={() => onRemoveFromDeck(card)}>
                            <img src={card.imageUrl} width={100} height={140} alt={card.name} />
                            <span style={{
                                position: 'absolute', top: '0', left: '0',
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
