import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import visibleExpenses from '../selectors/expenses';
import totalExpense from '../selectors/expense-total';

const ExpenseSummary = ({expenseCount, totalExpense}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';

    const expenseTotal = numeral(totalExpense / 100).format('$0,0.00');

    return(
        <p>Viewing {expenseCount} {expenseWord} totalling {expenseTotal}</p>
    );
}

const mapStateToProps = (state) => {
    const visibleExpense = visibleExpenses(state.expenses, state.filters);
    return{
        expenseCount : visibleExpense.length, 
        totalExpense : totalExpense(visibleExpense)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);


