import React from 'react';
import {Field, reduxForm} from "redux-form";
import ButtonComponent from "../../utils/ButtonComponent/ButtonComponent";
import TextInput from "../../utils/TextInput/TextInput";
import './LoginFormStyles.css';

class LoginForm extends React.Component {
    render() {
        const {handleSubmit, loading} = this.props;

        return (
            <form onSubmit={handleSubmit} className='formStyle'>
                <h1>The best real estate agency</h1>
                <div className='containerStyle'>
                    <Field
                        name="userName"
                        component={TextInput}
                        label='Username'
                    />
                </div>
                <div className='containerStyle'>
                    <Field
                        name="password"
                        component={TextInput}
                        label='Password'
                        password
                    />
                </div>
                <div className='containerStyle'>
                    <ButtonComponent
                        text='Sign In'
                        loading={loading}
                    />
                </div>
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'login',
})(LoginForm);

export default LoginForm;