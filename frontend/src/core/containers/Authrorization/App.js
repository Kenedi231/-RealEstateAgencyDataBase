import React from 'react';
import {connect} from 'react-redux';
import getUserDataAction from "../../../actions/getUserListAction";
import sendAuthDataAction from "../../../actions/sendAuthDataAction";

import './App.css';
import LoginForm from "./LoginForm";

const mapStateToProps = state => ({
  userDataLoading: state.userReducer.loading,
  userData: state.userReducer.users,
});

const mapDispatchToProps = dispatch => ({
    getUserDataAction: () => dispatch(getUserDataAction()),
    sendAuthDataAction: (data) => dispatch(sendAuthDataAction(data)),
});

class App extends React.Component {

    submit = values => {
        this.props.sendAuthDataAction(values);
        // this.props.getUserDataAction();
    };

    render() {
      const {userDataLoading} = this.props;
      console.log(this.props);

      return (
          <div className="App">
            <LoginForm onSubmit={this.submit} loading={userDataLoading} />
          </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
