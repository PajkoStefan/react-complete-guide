import Expenses from "./components/Expenses/Expenses";

//import data
import { expenses } from "./data";

const App = () => {
  return (
    <div className="App">
      <h1>React App</h1>
     <Expenses expenseItems={expenses}/>
    </div>
  );
}

export default App;
