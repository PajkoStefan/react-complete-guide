import { useState } from "react";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ item, setItems }) => {
  const [title, setTitle] = useState(item.title);

  const changeTitleHandler = (evt) => {
    setTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={item.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${item.price}</div>
        </div>
        <button onClick={changeTitleHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
