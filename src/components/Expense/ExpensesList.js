import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ productsInfo, editHandler }) => {
  return (
    <Card>
      {productsInfo.map(({ itemName, date, cost, id }) => {
        return (
          <ExpenseItem
            id={id}
            cost={cost}
            date={date}
            itemName={itemName}
            editHandler={editHandler}
          />
        );
      })}
    </Card>
  );
};

export default ExpensesList;
