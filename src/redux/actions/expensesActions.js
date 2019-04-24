import {
    addExpenseAction,
    clear,
  } from '../constants/expensesTypes';
  
  const addExpense = (expense) => ({
    type: addExpenseAction, expense
  });
  
  const clearError = () => ({
    type: clear
  });
  
  export {
    addExpense,
    clearError
  };