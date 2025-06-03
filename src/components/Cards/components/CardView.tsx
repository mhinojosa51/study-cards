import { useState } from "react";
import { type Card } from "../../../types";
import "./CardView.css";

interface ICardView extends Card {
    onAddToDeckClickCallback?: (id: Card["id"]) => void;
    isSelected?: boolean;
}

export const CardView: React.FC<ICardView> = ({
    id,
    frontText,
    backText,
    onAddToDeckClickCallback,
    isSelected,
}: ICardView) => {
    const [showFront, setShowFront] = useState<boolean>(true);

    const onCardClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
        setShowFront(!showFront);
        if (onAddToDeckClickCallback) {
            onAddToDeckClickCallback(id);
        }
    };

    const displayText = () => {
        if (isSelected !== undefined) {
            return <h2>{frontText}</h2>;
        }

        return <h2>{showFront ? frontText : backText}</h2>;
    };

    return (
        <div
            className={`card card-front ${
                Boolean(isSelected) ? "card-selected" : ""
            }`}
            onClick={onCardClickHandler}>
            {displayText()}
        </div>
    );
};
