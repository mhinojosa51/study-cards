import "./App.css";
import { NavLink } from "react-router";

function App() {
    return (
        <>
            <h1>Study Cards</h1>
            <NavLink to={"/decks"}>Decks</NavLink>
        </>
    );
}

export default App;
