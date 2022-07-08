import ExpenseForm from "./ExpenseForm/ExpenseFrom";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (expenseData) =>
    onAddExpense({ ...expenseData, id: Math.random() });

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
