import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({
  productsInfo,
  editHandler,
  selectedYear,
  addEditEnabled,
  addEditEnableHandler,
}) => {
  productsInfo = productsInfo.filter(
    (o) => o.date.getFullYear().toString() === selectedYear.toString()
  );
  return (
    <div style={{ padding: "10px 10px" }}>
      {productsInfo.length ? (
        productsInfo.map(({ itemName, date, cost, id }) => {
          return (
            <ExpenseItem
              id={id}
              key={"li" + id}
              cost={cost}
              date={date}
              itemName={itemName}
              editHandler={editHandler}
              selectedYear={selectedYear}
              addEditEnabled={addEditEnabled}
              addEditEnableHandler={addEditEnableHandler}
            />
          );
        })
      ) : (
        <div style={{ padding: "10px 10px", textAlign: "center" }}>
          <p>No Expense(s) found for the year {selectedYear}</p>
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
