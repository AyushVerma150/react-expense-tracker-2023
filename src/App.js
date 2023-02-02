import React, { useEffect, useState } from 'react';
import AppHeader from './components/UI/AppHeader';
import ExpensesList from './components/Expense/ExpensesList';
import AddEditExpense from './components/Expense/AddEditExpense';

const App = () => {
  // default Values
  const [productsInfo, setProductInfo] = useState([
    { id: 'av-1', itemName: ' Pepsi', cost: '25', date: new Date() },
    { id: 'av-2', itemName: ' Chips', cost: '25', date: new Date() },
    { id: 'av-3', itemName: ' Fries', cost: '25', date: new Date() },
    { id: 'av-4', itemName: ' Gooday', cost: '25', date: new Date() },
    { id: 'av-5', itemName: ' Pizza', cost: '25', date: new Date() },
  ]);

  const [editInfo, setEditInfo] = useState(null);
  const [editEnabled, setEditEnabled] = useState(false);

  const editHandler = (title, cost, id) => {
    if (title && cost && id) {
      setEditEnabled(true);
      setEditInfo({
        title,
        cost,
        id,
      });
    }
  };

  const addEditExpenseHandler = (product, edit = false) => {
    if (edit) {
      setProductInfo((prev) => {
        const editedInfo = prev;
        const founProd = editedInfo.findIndex((o) => o.id === product.id);
        editedInfo[founProd] = {
          id: product.id,
          itemName: product.title,
          cost: product.cost,
          date: new Date(),
        };
        return editedInfo;
      });
      // Reset the edit form functionality!!
      setEditEnabled(false);
      setEditInfo(null);
    } else {
      setProductInfo((prev) => {
        return [
          ...prev,
          {
            id: 'av-' + productsInfo.length + 1,
            itemName: product.title,
            cost: product.cost,
            date: new Date(),
          },
        ];
      });

      // Reset the form!
      setEditEnabled(false);
      setEditInfo(null);
    }
  };

  return (
    <div>
      <AppHeader />
      <AddEditExpense
        edit={editEnabled}
        editInfo={editInfo}
        addEditHandler={addEditExpenseHandler}
      />
      <ExpensesList productsInfo={productsInfo} editHandler={editHandler} />
    </div>
  );
};

export default App;
