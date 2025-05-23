export type TCard = {
    id: number;
    category: string;
    frontCardText: string;
    backCardText: string;
};

export type TFilters = "category" | "search";
export type TFilterObj = {
    [Key in TFilters]: string;
};
