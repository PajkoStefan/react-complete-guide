import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = ({ expenseItems }) => {
  const [filteredYear, setFilteredYear] = useState(() =>
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  const filteredExpenseItemsByYear = expenseItems.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={filterChangeHandler}
          selectedYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenseItemsByYear} />
        <ExpensesList items={filteredExpenseItemsByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
