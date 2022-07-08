import "./ExpensesFilter.css";

const ExpensesFilter = ({ selectedYear, onFilterChange }) => {
  const years = [2019, 2020, 2021, 2022];

  const filterChangeHandler = (event) => onFilterChange(event.target.value);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select onChange={filterChangeHandler} value={selectedYear}>
          {years.map((year) => {
            return (
              <option key={Math.random() + year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
