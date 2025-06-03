import { useState } from "react";
import { type Card } from "../../../types";
import "./CardView.css";

interface ICardView extends Card {
    onAddToDeckClickCallback?: (id: Card["id"]) => void;
}

export const CardView: React.FC<ICardView> = ({
    id,
    frontText,
    backText,
    onAddToDeckClickCallback,
}: ICardView) => {
    const [showFront, setShowFront] = useState<boolean>(true);
    const [selected, setSelected] = useState<boolean>(false);

    const onCardClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
        setShowFront(!showFront);
        if (onAddToDeckClickCallback) {
            onAddToDeckClickCallback(id);
            setSelected(!selected);
        }
    };

    return (
        <div
            className={`card card-front ${selected ? "card-selected" : ""}`}
            onClick={onCardClickHandler}>
            {showFront ? <h3>{frontText}</h3> : <h3>{backText}</h3>}
        </div>
    );
};
