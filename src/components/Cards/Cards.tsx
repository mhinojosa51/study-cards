import { useContext, useState } from "react";
import { Link } from "react-router";
import { type Card, type CardCategoryValues, CardCategory } from "../../types";
import { CardsContext, addCardAction, deleteCardAction } from "./CardsContext";
import { createId } from "../../utils";
import "./Cards.css";

export const Cards: React.FC = () => {
    const [cards, dispatch] = useContext(CardsContext);
    const [frontText, setFrontText] = useState<string>("");
    const [backText, setBackText] = useState<string>("");
    const [category, setCategory] = useState<CardCategoryValues>("General");

    console.log(`card state is`);
    console.dir(cards);

    const onDeleteCardHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteCardAction(cards[cards.length - 1]));
    };

    const onFrontCardTextChangeHandler = (
        ev: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFrontText(ev.target.value);
    };

    const onBackCardTextChangeHandler = (
        ev: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBackText(ev.target.value);
    };

    const onCategoryChangeHandler = (
        ev: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCategory(ev.target.value as CardCategoryValues);
    };

    const onFormSubmitHandler = (ev: React.MouseEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const cardData: Card = {
            id: createId(cards),
            category,
            frontText,
            backText,
        };

        dispatch(addCardAction(cardData));
    };

    const categoryValues = Object.values(CardCategory) as CardCategoryValues[];

    return (
        <div className='cards-container flex-column'>
            <h2>Cards Page</h2>
            <section className='links'>
                <Link to={"/decks"}>Decks</Link>
            </section>
            <form className='flex-column' onSubmit={onFormSubmitHandler}>
                <section>
                    <label htmlFor='front-text'>Front Card Text</label>
                    <input
                        type='text'
                        value={frontText}
                        onChange={onFrontCardTextChangeHandler}
                        required
                    />
                </section>
                <section>
                    <label htmlFor='back-text'>Back Card Text</label>
                    <input
                        type='text'
                        value={backText}
                        onChange={onBackCardTextChangeHandler}
                        required
                    />
                </section>
                <section>
                    <select
                        value={category}
                        onChange={onCategoryChangeHandler}
                        required>
                        {categoryValues.map((value) => {
                            return (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            );
                        })}
                    </select>
                </section>
                <button type='button' onClick={onDeleteCardHandler}>
                    Delete Last Card
                </button>
                <section>
                    <button type='submit'>Add Card</button>
                </section>
            </form>
        </div>
    );
};
