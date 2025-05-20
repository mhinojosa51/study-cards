import { useEffect } from "react";
import type { ReactNode } from "react";

export const Filter: React.FC<{ children: ReactNode }> = ({ children }) => {
    useEffect(() => {
        console.log("Mounted HEHEHEHEHEH");
    }, []);
    return <div>{children}</div>;
};
