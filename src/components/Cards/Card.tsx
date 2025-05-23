import { useState, useContext } from "react";
import { CardsContext } from "./CardsContext";
import { type TCard } from "../../types";

export const Card: React.FC<TCard> = ({
    id,
    category,
    frontCardText,
    backCardText,
}) => {
    const [showFront, setShowFront] = useState<boolean>(true);
    const [cards, setCards] = useContext(CardsContext);

    const onClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
        setShowFront(!showFront);
    };

    const onDeleteClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation();
        setCards(cards.filter((element) => element.id != id));
    };

    return (
        <div
            className={showFront ? "card" : "card-back"}
            onClick={onClickHandler}>
            <h5>Category: {category}</h5>
            <p>{showFront ? frontCardText : backCardText}</p>
            <button type='button' onClick={onDeleteClickHandler}>
                Delete
            </button>
        </div>
    );
};
