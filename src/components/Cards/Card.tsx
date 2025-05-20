import { useState } from "react";
import { type TCard } from "../../types";

export const Card: React.FC<TCard> = ({
    category,
    frontCardText,
    backCardText,
}) => {
    const [showFront, setShowFront] = useState<boolean>(true);

    const onClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
        setShowFront(!showFront);
    };

    return (
        <div
            className={showFront ? "card" : "card-back"}
            onClick={onClickHandler}>
            <h5>Category: {category}</h5>
            <p>{showFront ? frontCardText : backCardText}</p>
        </div>
    );
};
