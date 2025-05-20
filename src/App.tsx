import { useState } from "react";
import "./App.css";
import { type TCard } from "./types";
import { Cards } from "./components/Cards";

function App() {
    const [category, setCategory] = useState<string>("Javascript");
    const [frontCardText, setFrontCardText] = useState<string>("");
    const [backCardText, setBackCardText] = useState<string>("");
    const [cards, setCards] = useState<TCard[]>([]);

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

    return (
        <>
            <h1>Study Cards</h1>
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
                    <Cards cards={cards}></Cards>
                </section>
            </form>
        </>
    );
}

export default App;
