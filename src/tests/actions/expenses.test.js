import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('Should remove expense from returning an object', () =>{
    const action = removeExpense({id: '1234'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
});


test('Sholud edit expense by returing edited object', () => {
    const action = editExpense('12345', {
        description: 'Description',
        note: 'Note',
        amount: 1234
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: {
            description: 'Description',
            note: 'Note',
            amount: 1234
        }
    });

});


test('Should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'Description',
        note: 'Note',
        amount: 4500,
        createdAt: 1000
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id:expect.any(Number)
        }
        
    })
});

test('Should setup add expense action object with default value', () => {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expenseData,
            id:expect.any(Number)
        }
        
    })
});