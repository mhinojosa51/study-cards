import { Link } from "react-router";
import { useReducer, useContext, useState } from "react";
import { CardsContext } from "../Cards/CardsContext";
import {
    DecksContext,
    decksActionCreator,
    DecksActionTypes,
} from "../Decks/DecksContext";
import { createId } from "../../utils";
import { type Deck, type Card } from "../../types";
import { CardView } from "../Cards/components/CardView";
import "./DeckBuilder.css";

export const DeckBuilder: React.FC = () => {
    const [cards, _] = useContext(CardsContext);
    const [decks, dispatch] = useContext(DecksContext);
    const [selectedCardIds, setSelectedCardIds] = useState<Set<Card["id"]>>(
        new Set([])
    );

    console.log("selected cards");
    console.dir(selectedCardIds);

    const deckFormInputNames = {
        deckName: "deck-name",
    } as const;

    const onAddToDeckClickCallback = (id: Card["id"]) => {
        if (selectedCardIds.has(id)) {
            selectedCardIds.delete(id);
            setSelectedCardIds(new Set(selectedCardIds));
        } else {
            selectedCardIds.add(id);
            setSelectedCardIds(new Set(selectedCardIds));
        }
    };

    const onSubmitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const data = new FormData(ev.currentTarget);
        const deckName = data.get(deckFormInputNames.deckName) as string;
        const deck: Deck = {
            id: createId(decks),
            name: deckName,
            cards: cards.filter((card) => selectedCardIds.has(card.id)),
        };

        dispatch(decksActionCreator(DecksActionTypes.add, deck));
    };

    console.log("decks state");
    console.dir(decks);
    return (
        <div className='deck-builder-container'>
            <h2>Deck Builder</h2>
            <section className='links'>
                <Link to={"/"}>Home Page</Link>
                <Link to={"/decks"}>Decks Page</Link>
            </section>
            <form onSubmit={onSubmitHandler}>
                <section className='deck-section'>
                    <label htmlFor='deck-name'>Deck Name: </label>
                    <input
                        name={deckFormInputNames.deckName}
                        type='text'
                        placeholder='Type A Name'
                    />
                    <button type='submit' id='deck-submit-btn'>
                        Create
                    </button>
                </section>
            </form>
            <section className='card-viewer-container'>
                {cards.map((card) => {
                    return (
                        <CardView
                            key={card.id}
                            onAddToDeckClickCallback={onAddToDeckClickCallback}
                            {...card}></CardView>
                    );
                })}
            </section>
        </div>
    );
};
