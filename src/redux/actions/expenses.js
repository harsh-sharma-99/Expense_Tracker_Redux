import { DELETE_EXPENSE } from "../action-types/expenses";
import AddExpense from "./../../pages/add-expense/index";

export const addExpense = (data) => {
  return {
    type: AddExpense,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};
