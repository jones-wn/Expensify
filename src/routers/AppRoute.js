import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import Dashboard from '../components/Dashboard';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import PageNotFound from '../components/PageNotFound';

const AppRoute = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/edit/:id" component={EditExpense}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/help" component={Help}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRoute;
