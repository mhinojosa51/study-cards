import { useState } from "react";
import { Card } from "./Card";
import { useFilterData } from "../../hooks";
import { type TCard } from "../../types";
import "./Cards.css";

export const Cards: React.FC<{ cards: TCard[] }> = ({ cards }) => {
    const [filterText, setFilterText] = useState<string>("All");

    const onFilterChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterText(ev.target.value);
    };

    cards = useFilterData(cards, filterText);

    return (
        <div id='cards-container'>
            <div id='filter'>
                <select value={filterText} onChange={onFilterChange}>
                    <option value={"All"}>All</option>
                    <option value={"Javascript"}>Javascript</option>
                    <option value={"Typescript"}>Typescript</option>
                </select>
            </div>
            <div id='card-section'>
                {cards.map((card: TCard) => {
                    return <Card key={card.id} {...card}></Card>;
                })}
            </div>
        </div>
    );
};
