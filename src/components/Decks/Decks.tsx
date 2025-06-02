import { Link } from "react-router";
import { useContext } from "react";
import { DecksContext, decksActionCreator } from "./DecksContext";
import { CardsContext } from "../Cards/CardsContext";
import { type Deck } from "../../types";
import { createId } from "../../utils";
import "./Decks.css";

export const Decks: React.FC = () => {
    const [cards, _] = useContext(CardsContext);
    const [decks, dispatch] = useContext(DecksContext);

    console.log("the decks state is: ");
    console.dir(decks);

    const dummyDeck: Deck = {
        id: createId(decks),
        name: "Dummy Deck",
        cards,
    };

    const onAddDeckHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(decksActionCreator("add", dummyDeck));
    };

    const onDeleteDeckHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(decksActionCreator("delete", dummyDeck));
    };

    return (
        <div className='decks-container'>
            <Link to={"/"}>Home Page</Link>
            <button type='button'>Create</button>
            <button type='button' onClick={onAddDeckHandler}>
                Add
            </button>
            <button type='button' onClick={onDeleteDeckHandler}>
                Delete
            </button>
        </div>
    );
};
