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

store.subscribe(() =>{
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

store.dispatch(addExpense({id:234, description:'water bill', note:'water', amount: 3000, createdAt:50}));

store.dispatch(addExpense({id:235, description:'rent bill', note:'rent', amount: 500, createdAt:100}));


const  jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));

