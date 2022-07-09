import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseFrom";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (expenseData) =>
    onAddExpense({ ...expenseData, id: Math.random() });

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="submit" onClick={showFormHandler}>
          Add New Expense
        </button>
      )}

      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancelForm={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
