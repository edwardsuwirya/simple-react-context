import {DepContext} from "../../context/DependencyContext";
import {MainContext} from "../../context/MainContext";

const withCombinedContext = (WrappedComponent) => (props) => (
    <DepContext.Consumer>
        {depContext => (
            <MainContext.Consumer>
                {mainContext => (
                    <WrappedComponent depContext={depContext} mainContext={mainContext} {...props}/>
                )}
            </MainContext.Consumer>
        )}
    </DepContext.Consumer>
)

export default withCombinedContext;