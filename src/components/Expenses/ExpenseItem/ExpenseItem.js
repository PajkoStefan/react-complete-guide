import { useState } from "react";
import ExpanseDate from "./ExpanseDate/ExpanseDate";
import Card from "../../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ item, setItems }) => {
  const [title, setTitle] = useState(item.title);

  const changeTitleHandler = (evt) => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpanseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${item.price}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
