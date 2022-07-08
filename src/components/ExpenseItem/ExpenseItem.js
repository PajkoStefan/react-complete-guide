import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  
  const convertADate = (date) => {
    return {
      month: date.toLocaleString("en-US", { month: "long" }),
      day: date.toLocaleString("en-US", { day: "2-digit" }),
      year: date.getFullYear(),
    };
  };

  const { month, day, year } = convertADate(item.date);

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
