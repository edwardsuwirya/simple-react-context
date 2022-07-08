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

import {MainContext} from "./context/MainContext";
import LoginView from "./features/login/loginView";
import ProfileView from "./features/profile/profileView";
import {Component} from "react";


class App extends Component {
    state = {
        profile: {},
    }
    setProfile = (profile) => {
        console.log(profile);
        this.setState({profile: profile});
    };

    render() {
        const {profile} = this.state;
        return (
            <MainContext.Provider value={{
                profile: profile,
                setProfile: this.setProfile
            }}>
                <LoginView/>
                <ProfileView/>
            </MainContext.Provider>
        )
    }
}

export default App;
