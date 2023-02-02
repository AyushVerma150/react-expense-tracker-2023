import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ExpenseItem = ({ itemName, cost, date, id, editHandler }) => {
  const onClickHandler = () => {
    //Update Product Name :
    editHandler(itemName, cost, id);
  };

  return (
    <Card
      style={{
        fontWeight: '400',
        display: 'block',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <ExpenseDate date={date} />
        <div
          style={{
            display: 'flex',
            width: '100%',
            padding: '5px 5px',
            alignItems: 'center',
            fontWeight: '600px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '14px',
                color: 'grey',
                // fontWeight: 'bold',
                fontStyle: 'italic',
              }}
            >
              Item Name
            </span>
            <br />
            <span>{itemName}</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridGap: '12px',
            fontWeight: '600px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '14px',
                color: 'grey',
                fontStyle: 'italic',
              }}
            >
              Expense
            </span>
            <br />
            <span>{'₹' + cost}</span>
          </div>
          <FontAwesomeIcon
            onClick={onClickHandler}
            style={{
              fontSize: '16px',
              fontWeight: 'bolder',
              opacity: '1',
            }}
            icon={faEdit}
          />
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
