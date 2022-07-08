import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

//import data
import { expenses } from "./data";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      {expenses.map(item => {
        return <ExpenseItem key={item.id} item={item} />
      })}
    </div>
  );
}

export default App;
