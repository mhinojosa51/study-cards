export const CardCategory = {
    typescript: "Typescript",
    javascript: "Javascript",
    general: "General",
} as const;

export type Card = {
    id: number;
    frontText: string;
    backText: string;
    category: (typeof CardCategory)[keyof typeof CardCategory];
};

export type CardCategoryValues =
    (typeof CardCategory)[keyof typeof CardCategory];

export type Deck = {
    id: number;
    name: string;
    cards: Card[];
};
