import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoute from './routers/AppRoute';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

const  jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));

