import ExpenseItem from "./ExpenseItem/ExpenseItem";

import './Expenses.css'

const Expenses = ({ expenseItems }) => {
  return (
    <div className="expenses">
      {expenseItems.map((item) => {
        return <ExpenseItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Expenses;
