//ADD_EXPENSE
export const addExpense = ({
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
export const removeExpense = ({id}= {}) => {
 return{
     type: 'REMOVE_EXPENSE',
     id
 }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}