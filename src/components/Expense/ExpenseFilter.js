const ExpenseFilter = () => {
  return (
    <div style={{ padding: '20px 20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h3 style={{ paddingLeft: '15' }}> Filter Expense by Year</h3>
        </div>
        <div>Current Year - 2023</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          margin: '0px auto',
          // padding: '5px 5px',
        }}
      >
        {[
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ].map((val) => {
          return (
            <div
              key={'list' + val}
              style={{ display: 'block', textAlign: 'center' }}
            >
              <div
                style={{
                  height: '120px',
                  width: '16px',
                  borderRadius: '0.375rem',
                  zIndex: '999',
                  border: '1px solid purple',
                  transform: 'rotate(180deg) scaleX(-1)',
                  background: 'white',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: Math.floor(Math.random() * 100),
                    width: '100%',
                    background: '#CF9FFF',
                    borderRadiusBottomLeft: '0.375rem',
                    borderRadiusBottomRight: '0.375rem',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
                  }}
                ></div>
              </div>
              <div>{val}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseFilter;
