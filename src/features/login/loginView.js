import {Component} from "react";
import {CombinedContext} from "../../context/CombinedContext";


class LoginView extends Component {
    //menggunakan contextType hanya bisa consume 1 context
    // static contextType = MainContext;

    static contextType = CombinedContext;

    // onLogin = async (mainCtx, depCtx) => {
    //     console.log(mainCtx);
    //     console.log(depCtx);
    //     try {
    //         const response = await depCtx.services.authenticationService.authenticate('joko');
    //         mainCtx.setProfile({name: response});
    //     } catch (e) {
    //     }
    // }

    onLogin = async () => {
        console.log(this.context);
        const {depContext, mainContext} = this.context
        try {
            const response = await depContext.services.authenticationService.authenticate('joko');
            mainContext.setProfile({name: response});
        } catch (e) {

        }
    }

    render() {
        // const {setProfile} = this.context;
        return (
            // <MainContext.Consumer>
            //     {value => {
            //         return (
            //             <>
            //                 <button onClick={() => value.setProfile({name: 'Joko'})}>Login</button>
            //             </>
            //         )
            //     }}
            // </MainContext.Consumer>
            // <>
            //     <DepContext.Consumer>
            //         {deps => (
            //             <MainContext.Consumer>
            //                 {vals => (
            //                     <button onClick={() => this.onLogin(vals, deps)}>Login</button>
            //                 )}
            //             </MainContext.Consumer>
            //         )}
            //
            //     </DepContext.Consumer>
            // </>
            <button onClick={this.onLogin}>Login</button>
        )
    }
}

// Alternatif lain tanpa menggunakan static keyword
// LoginView.contextType = MainContext;

export default LoginView;
