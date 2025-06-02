import { createContext, useReducer, type ReactNode } from "react";
import { type Deck } from "../../types";

const DecksActionTypes = {
    add: "add",
    delete: "delete",
} as const;

type DecksAction = {
    type: (typeof DecksActionTypes)[keyof typeof DecksActionTypes];
    payload: Deck;
};

export const decksActionCreator = (
    type: (typeof DecksActionTypes)[keyof typeof DecksActionTypes],
    payload: Deck
) => {
    switch (type) {
        case DecksActionTypes.add:
            return {
                type: DecksActionTypes.add,
                payload,
            };
        case DecksActionTypes.delete:
            return {
                type: DecksActionTypes.delete,
                payload,
            };
        default:
            return {
                type: DecksActionTypes.add,
                payload,
            };
    }
};

const decksReducer = (decksState: Deck[], { type, payload }: DecksAction) => {
    switch (type) {
        case DecksActionTypes.add:
            return [...decksState, payload];
        case DecksActionTypes.delete:
            return decksState.filter((deck) => deck.id);
        default:
            return [...decksState];
    }
};

export const DecksContext = createContext<
    [Deck[], React.ActionDispatch<[DecksAction]>]
>([[], () => {}]);

export const DecksProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [decksState, dispatch] = useReducer(decksReducer, []);

    return (
        <DecksContext.Provider value={[decksState, dispatch]}>
            {children}
        </DecksContext.Provider>
    );
};
