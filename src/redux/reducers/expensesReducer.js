import {
    addExpenseAction,

  } from '../constants/expensesTypes';
  
    
  const initialState = {
    expensesList:[]
  };
  
  const expensesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case addExpenseAction:
          return {
            ...state,
            expensesList: [...state.expensesList, action.expense]
          };

        default:
          return state;
    }
  };
  
  export default expensesReducer;