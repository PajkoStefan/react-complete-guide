import ExpanseDate from "./ExpanseDate/ExpanseDate";
import Card from "../../Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  return (
    <Card className="expense-item">
      <ExpanseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
