import { type Card } from "../types";

type HasId = {
    id: number;
};

export function createId<T extends HasId>(hasId: T[]): number {
    return hasId.length > 0
        ? Math.max(...hasId.map((element) => element.id)) + 1
        : 0;
}
