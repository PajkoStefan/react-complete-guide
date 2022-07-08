import ExpanseDate from "./ExpanseDate/ExpanseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  return (
    <div className="expense-item">
      <ExpanseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
