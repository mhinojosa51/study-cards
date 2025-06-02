import { createContext, useReducer, type ReactNode } from "react";
import { type Card, CardCategory } from "../../types";

const dummyCardData: Card[] = [
    {
        id: 0,
        frontText: "Some card text",
        backText: "More text for the back of the cards",
        category: CardCategory.general,
    },
    {
        id: 1,
        frontText: "Another card has another text",
        backText: "More text for card needs back text",
        category: CardCategory.javascript,
    },
];

const CardsActionTypes = {
    add: "add",
    delete: "delete",
} as const;

type CardsAction = {
    type: (typeof CardsActionTypes)[keyof typeof CardsActionTypes];
    payload: Card;
};

export const addCardAction: (payload: Card) => CardsAction = (payload) => {
    return {
        type: CardsActionTypes.add,
        payload,
    };
};

export const deleteCardAction: (payload: Card) => CardsAction = (payload) => {
    return {
        type: CardsActionTypes.delete,
        payload,
    };
};

const cardsReducer = (
    cardsState: Card[],
    { type, payload: cardData }: CardsAction
) => {
    switch (type) {
        case CardsActionTypes.add:
            return [...cardsState, cardData];
        case CardsActionTypes.delete:
            return cardsState.filter((card) => card.id != cardData.id);
        default:
            return [...cardsState];
    }
};

export const CardsContext = createContext<
    [Card[], React.ActionDispatch<[CardsAction]>]
>([[], () => {}]);

export const CardsProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [cards, dispatch] = useReducer(cardsReducer, [...dummyCardData]);

    return (
        <CardsContext.Provider value={[cards, dispatch]}>
            {children}
        </CardsContext.Provider>
    );
};
