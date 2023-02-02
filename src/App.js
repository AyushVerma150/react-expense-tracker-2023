import React, { useState } from 'react';
import AppHeader from './components/UI/AppHeader';
import ExpensesList from './components/Expense/ExpensesList';
import AddEditExpense from './components/Expense/AddEditExpense';
import ExpenseFilter from './components/Expense/ExpenseFilter';

const App = () => {
  // default Value
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
    if (title && cost) {
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
      if (product && product.title.length && product.cost.length) {
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
      }
      // Reset the edit form functionality!!
      setEditEnabled(false);
      setEditInfo(null);
    } else {
      if (product && product.title.length && product.cost.length) {
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
      }

      // Reset the form!
      setEditEnabled(false);
      setEditInfo(null);
    }
  };

  return (
    <div
      style={{
        width: '90%',
        margin: '0px auto',
        boxShadow:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        // margin: '15px',
        padding: '0 0 10px 0px',
      }}
    >
      <AppHeader />
      <AddEditExpense
        edit={editEnabled}
        editInfo={editInfo}
        addEditHandler={addEditExpenseHandler}
      />
      <ExpenseFilter />
      <ExpensesList productsInfo={productsInfo} editHandler={editHandler} />
    </div>
  );
};

export default App;
