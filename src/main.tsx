import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import { Decks } from "./components/Decks/Decks.tsx";
import { CardsContextProvider } from "./components/Cards/CardsContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <CardsContextProvider>
                            <App />
                        </CardsContextProvider>
                    }></Route>
                <Route path='/decks' element={<Decks />}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
