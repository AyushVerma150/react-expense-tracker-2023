const ExpenseFilter = () => {
  return (
    <div
      style={{
        // width: '75%',
        // width: '75%',
        // background: '#CCCCFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // padding: '15px 15px',
        margin: '10px auto',
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => {
        return (
          <div style={{ display: 'block', textAlign: 'center' }}>
            <div
              style={{
                height: '120px',
                width: '20px',
                borderRadius: '0.375rem',
                zIndex: '999',
                boxShadow:
                  'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
                transform: 'rotate(180deg) scaleX(-1)',
                margin: '10px',
                background: 'white',
              }}
            >
              <div
                style={{
                  height: Math.floor(Math.random() * 100),
                  width: '100%',
                  background: '#CF9FFF',
                  opacity: '0.8',
                  zIndex: '9',
                  borderRadius: '0.375rem',
                }}
              ></div>
            </div>
            <div>{val}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseFilter;
