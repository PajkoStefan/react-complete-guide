import Expenses from "./components/Expenses/Expenses";

import "./index.css";
//import data
import { expenses } from "./data";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    // add new item to the list
  }
  return (
    <div className="App">
      <h1 className="text-center">React App</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenseItems={expenses} />
    </div>
  );
};

export default App;
