import React from 'react';
import {connect} from 'react-redux';
import sendAuthDataAction from "../../../actions/sendAuthDataAction";

import './Login.css';
import LoginForm from "./LoginForm";

const mapStateToProps = state => ({
    authLoading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
    sendAuthDataAction: (data) => dispatch(sendAuthDataAction(data)),
});

class Login extends React.Component {

    submit = values => {
        this.props.sendAuthDataAction(values);
    };

    render() {
      const {authLoading} = this.props;
        console.log(this.props);

      return (
          <div className="App">
            <LoginForm onSubmit={this.submit} loading={authLoading} />
          </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
