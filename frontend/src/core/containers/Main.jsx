import React from 'react';
import {Router, Route} from 'react-router';
import App from "./Authrorization/App";


export default class Main extends React.Component {
    render() {
        const {history} = this.props;
        return (
            <Router history={history}>
                <Route path='/' component={App} />
            </Router>
        )
    }
}