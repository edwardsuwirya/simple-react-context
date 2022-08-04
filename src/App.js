/*
Tujuan React Context
1. membantu kita menyelesaikan masalah props drilling
Definisi Props drilling adalah pengiriman props ke nested component yang membutuhkan
dan melewati component" laen yang tidak membutuhkan props tersebut

2. Memudahkan kita mengkonsumsi data secara global
Rekomendasi data yang bisa disimpan di context adalah data yang jarang sekali dilakukan update
- Theme data (like dark or light mode)
- User data (the currently authenticated user)
- Location-specific data (like user language or locale)
 */

import LoginView from "./features/login/loginView";
import ProfileView from "./features/profile/profileView";
import {Component} from "react";
import MainContextProvider from "./context/MainContextProvider";
import {DepsProvider} from "./context/DependencyContextProvider";
import AuthenticationService from "./services/AuthenticationService";
import CombinedContextProvider from "./features/login/CombinedContext";


class App extends Component {
    render() {
        return (
            <DepsProvider services={{
                authenticationService: AuthenticationService(),
            }}>
                <MainContextProvider>
                    <CombinedContextProvider>
                        <LoginView/>
                    </CombinedContextProvider>
                    <ProfileView/>
                </MainContextProvider>
            </DepsProvider>
        )
    }
}

export default App;
