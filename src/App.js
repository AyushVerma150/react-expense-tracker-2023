import React, { useCallback, useEffect, useState } from 'react';
import AppHeader from './components/UI/AppHeader';
import ExpensesList from './components/Expense/ExpensesList';
import AddEditExpense from './components/Expense/AddEditExpense';
import ExpenseFilter from './components/Expense/ExpenseFilter';

const overAllProducts = [
  {
    id: 'av-1',
    itemName: ' Pepsi',
    cost: '25',
    date: new Date(2019, 11, 28),
  },
  {
    id: 'av-2',
    itemName: ' Chips',
    cost: '25',
    date: new Date(2019, 10, 15),
  },
  { id: 'av-3', itemName: ' Fries', cost: '25', date: new Date(2022, 3, 12) },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 3, 13),
  },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 3, 13),
  },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 5, 13),
  },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 5, 13),
  },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 2, 13),
  },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 2, 13),
  },
  {
    id: 'av-4',
    itemName: ' Gooday',
    cost: '25',
    date: new Date(2022, 1, 13),
  },
  { id: 'av-5', itemName: ' Pizza', cost: '25', date: new Date(2022, 3, 3) },
];

const App = () => {
  // default Value
  const [expenseData, setExpenseData] = useState({});
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [productsInfo, setProductInfo] = useState([]);
  const [productsOverAll, setProductsOverAll] = useState(overAllProducts);

  const [editInfo, setEditInfo] = useState(null);
  const [editEnabled, setEditEnabled] = useState(false);

  const addEditExpenseHandler = (product, edit = false) => {
    if (edit) {
      if (product && product.title.length && product.cost.length) {
        setProductsOverAll((prev) => {
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
        setProductsOverAll((prev) => {
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

  const evaluateExpensesByYear = useCallback(() => {
    let expenseInfo = {};
    const yearInfo = productsInfo.filter((o) => {
      return o.date.getFullYear().toString() === selectedYear.toString();
    });

    let overAllExpense = 0;
    yearInfo.forEach(({ date, cost }) => {
      overAllExpense += Number(cost);
      if (expenseInfo[date.getMonth()]) {
        let currCost = expenseInfo[date.getMonth()];
        expenseInfo[date.getMonth()] = currCost + Number(cost);
      } else {
        expenseInfo = {
          ...expenseInfo,
          [date.getMonth()]: Number(cost),
        };
      }
    });
    setExpenseData({ ...expenseInfo, overAllExpense });
    setProductInfo(yearInfo);
  }, [productsInfo, selectedYear]);

  useEffect(() => {
    if (productsOverAll.length) {
      console.log('The products over All : ', productsOverAll);
      const dataBySelectedYear = productsOverAll.filter(
        (o) => o.date.getFullYear().toString() === selectedYear.toString()
      );

      console.log(
        'The Products Over all Filtered Data is : ',
        dataBySelectedYear
      );
      setProductInfo(dataBySelectedYear);
    }
  }, [productsOverAll, selectedYear]);

  useEffect(() => {
    if (productsInfo.length) {
      evaluateExpensesByYear();
    }
  }, [selectedYear, productsInfo, evaluateExpensesByYear]);

  useEffect(() => {
    if (productsInfo.length) {
      evaluateExpensesByYear();
    }
  }, [selectedYear, productsInfo, evaluateExpensesByYear]);

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

  return (
    <div
      style={{
        width: '90%',
        margin: '0px auto',
        boxShadow:
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        padding: '0 0 10px 0px',
      }}
    >
      <AppHeader />
      <AddEditExpense
        edit={editEnabled}
        editInfo={editInfo}
        addEditHandler={addEditExpenseHandler}
      />
      <ExpenseFilter
        expenseData={expenseData}
        selectedYear={selectedYear}
        productsList={productsInfo}
        setSelectedYear={setSelectedYear}
      />
      <ExpensesList productsInfo={productsInfo} editHandler={editHandler} />
    </div>
  );
};

export default App;
