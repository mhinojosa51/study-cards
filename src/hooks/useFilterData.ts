type TFilterFunc<T> = (element: T) => boolean;

export const useFilterData = <T extends object>(
    data: T[],
    filterFnc: TFilterFunc<T>
) => {
    return data.filter(filterFnc);
};
