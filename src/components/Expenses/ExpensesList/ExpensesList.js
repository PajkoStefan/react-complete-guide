import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = ({ items, ...props}) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ExpensesList;
