type TFilterFunc<T> = (element: T) => boolean;
type TGenericObject = {
    "category": string;
}
export function useFilterData<T extends TGenericObject & object>(data: T[], filterBy: TFilterFunc<T> | string)
{
    if(typeof filterBy === "string")
    {
        return data.filter((element) => filterBy == "All" ? true : element.category === filterBy);
    }

    return data.filter(filterBy);
}

