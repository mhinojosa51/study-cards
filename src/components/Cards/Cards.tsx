import { Card } from "./Card";
import { type TCard } from "../../types";
import "./Cards.css";

export const Cards: React.FC<{
    cards: TCard[];
}> = ({ cards }) => {
    return (
        <div id='cards-container'>
            <div id='card-section'>
                {cards.map((card: TCard) => {
                    return <Card key={card.id} {...card}></Card>;
                })}
            </div>
        </div>
    );
};
