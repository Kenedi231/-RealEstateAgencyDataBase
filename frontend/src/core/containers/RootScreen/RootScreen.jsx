import React from 'react';
import {connect} from 'react-redux';
import MainScreen from "../MainScreen/MainScreen";
import Login from "../Authrorization/Login";

const mapStateToProps = state => ({
    authToken: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
});

class RootScreen extends React.Component {


    render() {
        const {authToken} = this.props;

        if (authToken) {
            return <MainScreen />
        } else {
            return <Login />
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (RootScreen);
