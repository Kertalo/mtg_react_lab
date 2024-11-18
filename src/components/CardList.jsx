import {useEffect, useState} from "react";
import {Mtg} from "../api/mtg.js";
import {Search} from "./Search.jsx";

function CardList({ onCardSelect }) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const mtg = new Mtg();
        mtg.loadCards("")
            .then((loadedCards) => {
                setCards(loadedCards)
            });
    }, []);

    const search = (searchText) => {
        const mtg = new Mtg();
        mtg.loadCards(searchText)
            .then((loadedCards) => {
                setCards(loadedCards)
            });
    };

    const showCard = (item) => {
        onCardSelect(item);
    };

    return (
        <div id="menu" key="menuCards">
            <h2 key="cards">Cards</h2>
            <Search onSearch={search} />
            <div id="listContainer" key="listContainer">
                {
                cards.map(card => card.multiverseid != undefined ?
                    <li key={card.multiverseid} onClick={() => showCard(card)}>
                        {card.name}
                    </li> : <></>)
                }
            </div>
        </div>
    )
}

export {CardList}