import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

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
            justifyContent: 'space-evenly',
            gridGap: '12px',
            fontWeight: '600px',
            position: 'relative',
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
            title="Click to Edit the Item"
            onClick={onClickHandler}
            style={{
              position: 'absolute',
              top: '-65%',
              right: '-30%',
              fontSize: '24px',
              color: '#CF9FFF',
            }}
            icon={faEdit}
          />
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
