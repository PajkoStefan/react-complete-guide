import { useState } from "react";
import Expenses from "../Expenses/Expenses";
import NewExpense from "../NewExpense/NewExpense";

//import data
import { EXPENSES } from "../../data";

const AppWrapper = () => {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpenseHandler = (expenseData) =>
    setExpenses((prevState) => [...prevState, expenseData]);

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseItems={expenses} />
    </>
  );
};

export default AppWrapper;
