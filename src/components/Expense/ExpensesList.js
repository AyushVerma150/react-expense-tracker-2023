import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ productsInfo, editHandler }) => {
  return (
    <div style={{ padding: '10px 10px' }}>
      {productsInfo.map(({ itemName, date, cost, id }) => {
        return (
          <ExpenseItem
            id={id}
            key={'li' + id}
            cost={cost}
            date={date}
            itemName={itemName}
            editHandler={editHandler}
          />
        );
      })}{' '}
    </div>
  );
};

export default ExpensesList;
