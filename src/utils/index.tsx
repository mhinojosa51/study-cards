import { type Card } from "../types";

export const createId = (cards: Card[]) => {
    return Math.max(...cards.map((card) => card.id)) + 1;
};
