import './App.css'
import React, { useState } from 'react';
import {CardList} from "./components/CardList.jsx";
import {DeckPanel} from "./components/DeckPanel.jsx";
import {Card} from "./components/Card.jsx";
import {StatisticsPanel} from "./components/StatisticsPanel.jsx";

function App() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardSelect = (card) => {
        setSelectedCard(card);
    };

    return (
        <>
            <header>
                <h1>MTG Deck Builder</h1>
            </header>
            <main className="main">
                <CardList onCardSelect={handleCardSelect}/>
                {selectedCard && <Card card={selectedCard}/>}
                <DeckPanel/>
                <StatisticsPanel/>
            </main>
        </>
    )
}

export default App
