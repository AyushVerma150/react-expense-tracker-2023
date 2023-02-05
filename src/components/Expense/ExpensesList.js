import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ productsInfo, editHandler, selectedYear }) => {
  return (
    <div style={{ padding: "10px 10px" }}>
      {productsInfo.map(({ itemName, date, cost, id }) => {
        return (
          <ExpenseItem
            id={id}
            key={"li" + id}
            cost={cost}
            date={date}
            itemName={itemName}
            editHandler={editHandler}
            selectedYear={selectedYear}
          />
        );
      })}
    </div>
  );
};

export default ExpensesList;
