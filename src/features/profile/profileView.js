import {Component} from "react";
import {MainContext} from "../../context/MainContext";

class ProfileView extends Component {
    static contextType = MainContext

    render() {
        const {profile} = this.context
        return (
            <p>{profile ? profile.name : ''}</p>
        )
    }
}

export default ProfileView;
