import React from 'react';
import {Router, Route} from 'react-router';
import RootScreen from "./RootScreen/RootScreen";
import ApartmentPage from "./Apartments/ApartmentPage";
import AgentPage from "./Agent/AgentPage";
import ContractPage from "./Contract/ContractPage"
import ContractWithAgencyPage from "./ContractWithAgency/ContractWithAgencyPage";
import DataPage from "./Data/DataPage";
import EmployerPage from "./Employer/EmployerPage";
import OwnerPage from "./Owner/OwnerPage";
import PhotoPage from "./Photo/PhotoPage";
import PhotoCatalogPage from "./PhotoCatalog/PhotoCatalogPage";
import RatePage from "./Rate/RatePage";
import UserPage from "./User/UserPage";

import {history} from '../../index';

const token = localStorage.getItem('token');

export default class Main extends React.Component {
    render() {
        if (token === 'null') {
            history.replace('/');
        }

        return (
            <Router history={history}>
                <Route path='/' component={RootScreen} />
                <Route path='/apartments' component={ApartmentPage} />
                <Route path='/agents' component={AgentPage} />
                <Route path='/contracts' component={ContractPage} />
                <Route path='/data' component={DataPage} />
                <Route path='/employers' component={EmployerPage} />
                <Route path='/owners' component={OwnerPage} />
                <Route path='/photos' component={PhotoPage} />
                <Route path='/photo-catalogs' component={PhotoCatalogPage} />
                <Route path='/rates' component={RatePage} />
                <Route path='/users' component={UserPage} />
                <Route path='/contracts-with-agency' component={ContractWithAgencyPage} />
            </Router>
        )
    }
}