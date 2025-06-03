import { Link } from "react-router";
import { useContext } from "react";
import { DecksContext } from "./DecksContext";
import "./Decks.css";

export const Decks: React.FC = () => {
    const [decks, _] = useContext(DecksContext);

    console.log("the decks state is: ");
    console.dir(decks);

    console.log("rerendered decks page");

    return (
        <div className='decks-container'>
            <Link to={"/"}>Home Page</Link>
            <Link to={"/deck-builder"}>
                <button type='button'>Create</button>
            </Link>
        </div>
    );
};
