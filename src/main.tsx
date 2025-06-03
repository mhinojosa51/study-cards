import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Cards } from "./components/Cards";
import { CardsProvider } from "./components/Cards/CardsContext";
import { Decks } from "./components/Decks";
import { DecksProvider } from "./components/Decks/DecksContext";
import { DeckBuilder } from "./components/DeckBuilder";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CardsProvider>
            <DecksProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Cards />}></Route>
                        <Route path='/decks' element={<Decks />}></Route>
                        <Route
                            path='/deck-builder'
                            element={<DeckBuilder />}></Route>
                    </Routes>
                </BrowserRouter>
            </DecksProvider>
        </CardsProvider>
    </StrictMode>
);
