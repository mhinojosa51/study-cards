import { type TFilterObj, type TCard } from "../types";
type TFilterFunc<T> = (element: T, index?: number, array?: T[]) => boolean;

export function useFilterCardData<T extends TCard & object>(
    data: T[],
    filterBy: TFilterFunc<T> | TFilterObj
) {
    if (typeof filterBy === "object") {
        return data
            .filter((element) =>
                filterBy["category"] === "All"
                    ? true
                    : element.category === filterBy["category"]
            )
            .filter((element) =>
                element.frontCardText
                    .toLowerCase()
                    .includes(filterBy["search"].toLowerCase())
            );
    }

    return data.filter(filterBy);
}
