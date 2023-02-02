import { useEffect, useState } from 'react';

const AddEditExpense = ({ edit, editInfo, addEditHandler }) => {
  const [productTitle, setProductTitle] = useState(edit ? editInfo.title : '');
  const [productCost, setProductCost] = useState(edit ? editInfo.cost : '');

  useEffect(() => {
    if (edit && editInfo) {
      setProductTitle(editInfo.title);
      setProductCost(editInfo.cost);
    }
  }, [edit, editInfo]);

  const onChangeHandler = (event) => {
    if (event.target.name === 'title') {
      setProductTitle(event.target.value);
    } else {
      setProductCost(event.target.value);
    }
  };

  const onSaveClickHandler = () => {
    addEditHandler(
      { title: productTitle, cost: productCost, id: edit ? editInfo.id : null },
      edit
    );

    //Reset Values
    setProductTitle('');
    setProductCost(null);
  };

  return (
    <div
      style={{
        width: '100%',
        margin: '0 auto ',
        color: 'white',
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSaveClickHandler();
        }}
        style={{
          width: '75%',
          margin: '0 auto',
          textAlign: 'cenetr',
          minHeight: 'max-content',
          borderRadius: '0.375rem',
          padding: '20px 15px',
          color: 'black',
        }}
      >
        <h3
          style={{ textAlign: 'center', padding: '5px 5px', fontWeight: '300' }}
        >
          Enter New Product Details
        </h3>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            gridGap: '10px',
            padding: '10px 10px',
          }}
        >
          <label style={{ fontWeight: '600' }}>Name</label>
          <input
            name="title"
            onChange={onChangeHandler}
            style={{
              minHeight: '30px',
              fontStyle: 'italic',
              borderRadius: '0.375rem',
              minWidth: '250px',
            }}
            placeholder="Enter Product"
            value={productTitle}
            type={'text'}
            autoFocus
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            gridGap: '10px',
            padding: '10px 10px',
          }}
        >
          <label style={{ fontWeight: '600' }}>Cost</label>
          <input
            name="cost"
            onChange={(e) => {
              onChangeHandler(e);
            }}
            style={{
              minHeight: '30px',
              fontStyle: 'italic',
              borderRadius: '0.375rem',
              minWidth: '250px',
            }}
            placeholder="Enter Cost"
            value={productCost ? productCost : ''}
            type={'number'}
            min="0.01"
            step="0.01"
          />
        </div>

        <div style={{ textAlign: 'center', margin: '0 auto' }}>
          <button
            style={{
              background: '#CF9FFF',
              border: 'none',
              outline: 'none',
              minHeight: '45px',
              minWidth: '70px',
              borderRadius: '0.375rem',
              color: 'black',
              fontWeight: '350',
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditExpense;
