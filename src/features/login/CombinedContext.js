import {MainContext} from "../../context/MainContext";
import {DepContext} from "../../context/DependencyContext";
import {CombinedContext} from "../../context/CombinedContext";

const CombinedContextProvider = (props) => {
    return (
        <DepContext.Consumer>
            {depContext => (
                <MainContext.Consumer>
                    {mainContext => (
                        <CombinedContext.Provider value={{depContext, mainContext}}>
                            {props.children}
                        </CombinedContext.Provider>
                    )}
                </MainContext.Consumer>
            )}
        </DepContext.Consumer>
    )
}
export default CombinedContextProvider