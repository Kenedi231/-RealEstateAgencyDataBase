import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import './MainScreenStyles.css'
import ButtonComponent from "../../utils/ButtonComponent/ButtonComponent";
import logoutAuthAction from "../../../actions/auth/logoutAuthAction";

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
                <div className='links'>
                    <Link to='/apartments' onlyActiveOnIndex>Apartment</Link>
                    <Link to='/agents' onlyActiveOnIndex>Agents</Link>
                    <Link to='/contracts' onlyActiveOnIndex>Contracts</Link>
                    <Link to='/data' onlyActiveOnIndex>Data</Link>
                    <Link to='/employers' onlyActiveOnIndex>Employers</Link>
                    <Link to='/owners' onlyActiveOnIndex>Owners</Link>
                    <Link to='/photos' onlyActiveOnIndex>Photos</Link>
                    <Link to='/photo-catalogs' onlyActiveOnIndex>Photo catalog</Link>
                    <Link to='/rates' onlyActiveOnIndex>Rates</Link>
                    <Link to='/users' onlyActiveOnIndex>Users</Link>
                    <Link to='/contracts-with-agency' onlyActiveOnIndex>Contract with agency</Link>
                </div>

                <ButtonComponent
                    text='Log out'
                    onClick={this.onLogout}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);
