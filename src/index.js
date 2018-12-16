import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import MainPage from './MainPage';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={MainPage} />
            </div>
        </Router>
    </Provider>,
    root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
