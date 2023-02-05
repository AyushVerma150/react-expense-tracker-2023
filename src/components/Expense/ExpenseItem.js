import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./Expense.css";

const ExpenseItem = ({
  itemName,
  cost,
  date,
  id,
  editHandler,
  addEditEnabled,
  addEditEnableHandler,
}) => {
  const onClickHandler = () => {
    //Update Product Name :
    editHandler(itemName, cost, id);
    // We need to open the AddEditExpense Drawer As well

    if (!addEditEnabled) {
      addEditEnableHandler();
    }
  };

  return (
    <Card
      style={{
        fontWeight: "400",
        display: "block",
      }}
    >
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ExpenseDate date={date} />
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "15px 10px",
            alignItems: "center",
            fontWeight: "600px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "14px",
                color: "grey",
                fontStyle: "italic",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "600px",
            position: "relative",
            // minWidth: '25%',
          }}
        >
          <div style={{ padding: "10px" }}>
            <span
              style={{
                fontSize: "14px",
                color: "grey",
                fontStyle: "italic",
              }}
            >
              Expense
            </span>
            <br />
            <span>{"₹" + cost}</span>
          </div>
          <FontAwesomeIcon
            title="Click to Edit the Item"
            onClick={onClickHandler}
            className="product-list--icon"
            icon={faEdit}
          />
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
