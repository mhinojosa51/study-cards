import "./App.css";
import { LandingPageCards } from "./components/LandingPageCards";
import { NavLink } from "react-router";

function App() {
    return (
        <>
            <h1>Study Cards</h1>
            <NavLink to={"/decks"}>Decks</NavLink>
            <LandingPageCards />
        </>
    );
}

export default App;
