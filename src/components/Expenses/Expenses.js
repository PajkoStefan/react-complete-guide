import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";

const Expenses = ({ expenseItems }) => {
  return (
    <Card className="expenses">
      {expenseItems.map((item) => {
        return <ExpenseItem key={item.id} item={item} />;
      })}
    </Card>
  );
};

export default Expenses;
