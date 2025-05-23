import { useState, createContext, type ReactNode } from "react";
import { type TCard } from "../../types";

const Categories = {
    Javascript: "Javascript",
    Typescript: "Typescript",
} as const;

const dummyCardData: TCard[] = [
    {
        id: 0,
        category: Categories.Javascript,
        frontCardText: "How to declare a variable?",
        backCardText: "This would be the back of the card",
    },
    {
        id: 1,
        category: Categories.Typescript,
        frontCardText: "Why do you need functions?",
        backCardText: "This would be the back of the card",
    },
    {
        id: 2,
        category: Categories.Typescript,
        frontCardText: "What are enums?",
        backCardText: "This would be the back of the card",
    },
];

// var names are CardsContext and CardsContextProvider, type is TCardsContext
// can provide a type to createContext
type TCardsContext = [TCard[], React.Dispatch<React.SetStateAction<TCard[]>>];

export const CardsContext = createContext<TCardsContext>([
    dummyCardData,
    () => {},
]);

export const CardsContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [cards, setCards] = useState<TCard[]>([...dummyCardData]);
    return (
        <CardsContext.Provider value={[cards, setCards]}>
            {children}
        </CardsContext.Provider>
    );
};
