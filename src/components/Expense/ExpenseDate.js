const ExpenseDate = ({ date }) => {
  return (
    <div>
      <div
        style={{
          display: 'block',
          backgroundColor: '#FFF0F5',
          textAlign: 'center',
          padding: '5px 5px',
          borderRadius: '0.375rem',
          fontSize: '12px',
          minWidth: '50px',
          fontWeight: '550',
          border: '1px solid black',
          boxShadow:
            ' rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        }}
      >
        <div>{date.toLocaleString('en-us', { month: 'long' })}</div>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {date.toLocaleString('en-us', { day: '2-digit' })}
        </div>
        <div>{date.getFullYear()}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
