import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import MainPage from './MainPage';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from "history/createBrowserHistory";

import store from './store';
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
var history = createBrowserHistory()

const root = document.getElementById('root');

class Page extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Header/>
                        <Route exact path="/" component={MainPage} />
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/registration' component={RegistrationPage}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}
ReactDOM.render(<Page/>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
