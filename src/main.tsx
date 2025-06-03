import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { Cards } from "./components/Cards";
import { CardsProvider } from "./components/Cards/CardsContext";
import { Decks } from "./components/Decks";
import { DecksProvider } from "./components/Decks/DecksContext";
import { DeckBuilder } from "./components/DeckBuilder";
import { AppRoutes } from "./common";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CardsProvider>
            <DecksProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path={AppRoutes.DEFAULT}
                            element={<Cards />}></Route>
                        <Route
                            path={AppRoutes.DECKS}
                            element={<Decks />}></Route>
                        <Route
                            path={AppRoutes.BUILDER}
                            element={<DeckBuilder />}></Route>
                    </Routes>
                </BrowserRouter>
            </DecksProvider>
        </CardsProvider>
    </StrictMode>
);
