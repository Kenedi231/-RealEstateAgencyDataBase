import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import agentReducer from "./agentReducer";
import contractReducer from "./contractReducer";
import contractWithAgencyReducer from "./contractWithAgencyReducer";
import dataReducer from "./dataReducer";
import apartmentReducer from "./apartmentReducer";
import ownerReducer from "./ownerReducer";
import employerReducer from "./employerReducer";
import rateReducer from "./rateReducer";
import photoReducer from "./photoReducer";
import photoCatalogReducer from "./photoCatalogReducer";
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    apartment: apartmentReducer,
    agent: agentReducer,
    contract: contractReducer,
    contractWithAgency: contractWithAgencyReducer,
    data: dataReducer,
    employer: employerReducer,
    owner: ownerReducer,
    rate: rateReducer,
    photo: photoReducer,
    photoCatalog: photoCatalogReducer,
    routing: routerReducer,
    form: formReducer,
});