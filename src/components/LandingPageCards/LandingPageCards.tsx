import { useState, useContext } from "react";
import { Cards, CardsContext } from "../Cards";
import { useFilterCardData } from "../../hooks";
import { type TCard, type TFilterObj } from "../../types";
import "./LandingPageCards.css";

export const LandingPageCards: React.FC = () => {
    const [category, setCategory] = useState<string>("Javascript");
    const [frontCardText, setFrontCardText] = useState<string>("");
    const [backCardText, setBackCardText] = useState<string>("");
    const [categoryFilterText, setCategoryFilterText] = useState<string>("All");
    const [searchText, setSearchText] = useState<string>("");
    const [cards, setCards] = useContext(CardsContext);

    const onFilterChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryFilterText(ev.target.value);
    };

    const resetFields = () => {
        setCategory("Javascript");
        setFrontCardText("");
        setBackCardText("");
    };

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        let card: TCard = {
            id: cards.length,
            category,
            frontCardText,
            backCardText,
        };

        setCards([...cards, card]);
        resetFields();
    };

    const onCategoryChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        ev.preventDefault();
        setCategory(ev.target.value);
    };

    const onTextAreaChange = (inputName: string) => {
        return (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
            switch (inputName) {
                case "Front":
                    setFrontCardText(ev.target.value);
                    break;
                case "Back":
                    setBackCardText(ev.target.value);
                    break;
                default:
                    break;
            }
        };
    };

    const onSearchFilterChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(ev.target.value);
    };

    const filters: TFilterObj = {
        category: categoryFilterText,
        search: searchText,
    };

    return (
        <form id='create-card' onSubmit={onSubmit}>
            <section>
                <label htmlFor='category'>Select Category</label>
                <select
                    id='category'
                    onChange={onCategoryChange}
                    value={category}>
                    <option value='Javascript'>Javascript</option>
                    <option value='Typescript'>Typescript</option>
                </select>
            </section>
            <section>
                <label htmlFor='front-note-text'>Front of Card Text</label>
                <textarea
                    required
                    id='front-note-text'
                    name='front-note-text'
                    rows={5}
                    cols={33}
                    onChange={onTextAreaChange("Front")}
                    value={frontCardText}
                    placeholder='Put your study card text here - Front'></textarea>
            </section>
            <section>
                <label htmlFor='back-note-text'>Back of Card Text</label>
                <textarea
                    required
                    id='back-note-text'
                    name='back-note-text'
                    rows={5}
                    cols={33}
                    onChange={onTextAreaChange("Back")}
                    value={backCardText}
                    placeholder='Put your study card text here - Back'></textarea>
            </section>
            <section>
                <input type='submit' value='Add Card' />
            </section>
            <section>
                <div id='filter'>
                    <label htmlFor='filter-cards'>Filter Cards: </label>
                    <select
                        id='filter-cards'
                        value={categoryFilterText}
                        onChange={onFilterChange}>
                        <option value={"All"}>All</option>
                        <option value={"Javascript"}>Javascript</option>
                        <option value={"Typescript"}>Typescript</option>
                    </select>
                </div>
                <div id='search-container'>
                    <label htmlFor='search'>Search Cards: </label>
                    <input
                        id='search'
                        type='search'
                        value={searchText}
                        placeholder='Search for Cards'
                        onChange={onSearchFilterChange}
                    />
                </div>
                <Cards cards={useFilterCardData(cards, filters)}></Cards>
            </section>
        </form>
    );
};
