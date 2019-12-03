import React from 'react';
import {connect} from "react-redux";
import ButtonComponent from "../../utils/ButtonComponent/ButtonComponent";
import logoutAuthAction from "../../../actions/logoutAuthAction";

const mapStateToProps = state => ({
    username: state.auth.username,
});

const mapDispatchToProps = dispatch => ({
    logoutAuthAction: () => dispatch(logoutAuthAction()),
});

class MainScreen extends React.Component {
    onLogout = () => {
        this.props.logoutAuthAction();
    };

    render() {
        const {username} = this.props;
        return (
            <div>
                <h1>The best real estate agency</h1>
                <h2>Hello, {username}</h2>

                <ButtonComponent
                    text='Log out'
                    onClick={this.onLogout}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);
