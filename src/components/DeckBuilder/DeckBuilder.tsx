import { Link } from "react-router";
import { useContext, useState, useRef } from "react";
import { CardsContext } from "../Cards/CardsContext";
import {
    DecksContext,
    decksActionCreator,
    DecksActionTypes,
} from "../Decks/DecksContext";
import { createId } from "../../utils";
import { type Deck, type Card } from "../../types";
import { CardView } from "../Cards/components/CardView";
import { AppRoutes } from "../../common";
import "./DeckBuilder.css";

export const DeckBuilder: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [cards, _] = useContext(CardsContext);
    const [decks, dispatch] = useContext(DecksContext);
    const [selectedCardIds, setSelectedCardIds] = useState<Set<Card["id"]>>(
        new Set()
    );

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
        setSelectedCardIds(new Set());
        formRef.current?.reset();
    };

    console.log("decks state");
    console.dir(decks);
    return (
        <div className='deck-builder-container'>
            <h2>Deck Builder</h2>
            <section className='links'>
                <Link to={AppRoutes.DEFAULT}>Home Page</Link>
                <Link to={AppRoutes.DECKS}>Decks Page</Link>
            </section>
            <form onSubmit={onSubmitHandler} ref={formRef}>
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
                            isSelected={selectedCardIds.has(card.id)}
                            {...card}></CardView>
                    );
                })}
            </section>
        </div>
    );
};
