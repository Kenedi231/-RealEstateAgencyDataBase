import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store";
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'

import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from "./core/containers/Main";

const store = configureStore();

export const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
