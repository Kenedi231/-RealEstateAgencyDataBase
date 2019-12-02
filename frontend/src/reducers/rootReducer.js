import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    authReducer,
    userReducer,
    routing: routerReducer,
    form: formReducer,
});