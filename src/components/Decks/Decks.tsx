import { NavLink } from "react-router";
import { useReducer, type Reducer } from "react";
import "./Decks.css";

export const Decks: React.FC = () => {
    return (
        <div id='decks-container'>
            <h2>Decks Page</h2>
            <NavLink to={"/"}>Landing Page</NavLink>
        </div>
    );
};
