import {Component} from "react";
import {MainContext} from "../../context/MainContext";


class LoginView extends Component {
    static contextType = MainContext;

    render() {
        const {setProfile} = this.context;
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
            <>
                <button onClick={() => setProfile({name: 'Joko'})}>Login</button>
            </>
        )
    }
}

// Alternatif lain tanpa menggunakan static keyword
// LoginView.contextType = MainContext;

export default LoginView;
