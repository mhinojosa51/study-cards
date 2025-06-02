import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Cards } from "./components/Cards";
import { CardsProvider } from "./components/Cards/CardsContext";
import { Decks } from "./components/Decks";
import { DecksProvider } from "./components/Decks/DecksContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <CardsProvider>
                            <Cards />
                        </CardsProvider>
                    }></Route>
                <Route
                    path='/decks'
                    element={
                        <CardsProvider>
                            <DecksProvider>
                                <Decks />
                            </DecksProvider>
                        </CardsProvider>
                    }></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
