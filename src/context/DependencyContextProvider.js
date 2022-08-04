import {DepContext} from "./DependencyContext";

export function DepsProvider({children, ...services}) {
    return (
        <DepContext.Provider value={services}>
            {children}
        </DepContext.Provider>
    )
}