import './App.css';
import React, { useState } from 'react';
import { CardList } from "./components/CardList.jsx";
import { DeckPanel } from "./components/DeckPanel.jsx";
import { Card } from "./components/Card.jsx";
import { StatisticsPanel } from "./components/StatisticsPanel.jsx";

function App() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [deck, setDeck] = useState([]);

    const handleCardSelect = (card) => {
        setSelectedCard(card);
    };

    const handleAddToDeck = (card) => {
        setDeck((prevDeck) => {
            const existingCard = prevDeck.find(c => c.name === card.name);
            const isLand = card.type.includes('Land'); 

            if (existingCard) {
                if (!isLand && existingCard.count >= 4) {
                    alert(`Вы не можете добавить больше 4 копий карты "${card.name}".`);
                    return prevDeck;
                }
                return prevDeck.map(c =>
                    c.name === card.name ? { ...c, count: c.count + 1 } : c
                );
            }

            return [...prevDeck, { ...card, count: 1 }];
        });
    };

    const handleRemoveFromDeck = (card) => {
        setDeck((prevDeck) => {
            const existingCard = prevDeck.find(c => c.name === card.name);
            if (existingCard) {
                if (existingCard.count > 1) {
                    return prevDeck.map(c =>
                        c.name === card.name ? { ...c, count: c.count - 1 } : c
                    );
                } else {
                    return prevDeck.filter(c => c.name !== card.name);
                }
            }
            return prevDeck;
        });
    };

    return (
        <>
            <header>
                <h1>MTG Deck Builder</h1>
            </header>
            <main className="main">
                <CardList onCardSelect={handleCardSelect} />
                {selectedCard && <Card card={selectedCard} onAddToDeck={handleAddToDeck} />}
                <DeckPanel deck={deck} onRemoveFromDeck={handleRemoveFromDeck} />
                <StatisticsPanel />
            </main>
        </>
    );
}

export default App;
