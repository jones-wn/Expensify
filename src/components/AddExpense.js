import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
    <div>
         <p>This is Add expense page!</p>
         <ExpenseForm 
         onSubmit={(expenses) => {
            props.dispatch(addExpense(expenses));
            props.history.push('/');
         }}/>
    </div>
);

export default connect()(AddExpense);