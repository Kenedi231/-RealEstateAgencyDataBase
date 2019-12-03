import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import apartmentReducer from "./apartmentReducer";
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    apartment: apartmentReducer,
    routing: routerReducer,
    form: formReducer,
});