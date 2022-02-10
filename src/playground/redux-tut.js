import {createStore, combineReducers} from 'redux';

//ADD_EXPENSE
const addExpense = ({
    id = 0,
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => {
    return{
        type: 'ADD_EXPENSE',
        expenses : {
            id,
            description,
            note,
            amount,
            createdAt
        }
    }
}

//REMOVE_EXPENSE
const removeExpense = ({id}= {}) => {
 return{
     type: 'REMOVE_EXPENSE',
     id
 }
}

//EDIT_EXPENSE
const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

//SET_TEXT_FILTER
const setTextFilter = (text = '') => {
    return{
        type: 'SET_TEXT_FILTER',
        text
    }
}


//SORT_BY_DATE

const sortByDate = () => {
    return{
        type: 'SORT_BY_DATE'
    }
}

//SORT_BY_AMOUNT

const sortByAmount = () => {
    return{
        type: 'SORT_BY_AMOUNT'
    }
}

// SET_START_DATE
const setStartDate = (startDate) => {
    return{
        type: 'SET_START_DATE',
        startDate
    }
}


//SET_END_DATE
const setEndDate = (endDate) => {
    return{
        type: 'SET_END_DATE',
        endDate
    }
}


const expensesReducerDefaultState = [];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return[
                ...state,
                action.expenses
            ]

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                return expense.id === action.id ? {
                    ...expense,
                    ...action.updates
                 } : expense
            })
        default:
            return state;
    }
}


const filterReducerDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate : action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate : action.endDate
            }
        default:
            return state;
    }
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;

        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return b.amount - a.amount;
        }
    });
}


const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));


store.subscribe(()=> {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
})

const expenseOne = store.dispatch(addExpense({id: 123, description: 'rent', note: 'note', amount:500, createdAt:100}));

const expenseTwo = store.dispatch(addExpense({id: 124, description: 'coffee', note: 'noteer', amount:5100, createdAt:500}));


// store.dispatch(removeExpense({id: expenseTwo.expenses.id}));

// store.dispatch(editExpense(expenseOne.expenses.id, {amount: 1200}));

// store.dispatch(setTextFilter('rent'));


// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(230));
// store.dispatch(setEndDate(235));


const demoState = {
    expenses: [{
        id: "some id",
        description: "some description",
        note: "some note",
        amount: 0,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}