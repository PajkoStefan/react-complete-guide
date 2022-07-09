import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ item, setItems }) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={item.date} />
        <div className="expense-item__description">
          <h2>{item.title}</h2>
          <div className="expense-item__price">${item.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
