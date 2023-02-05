const ExpenseFilter = ({ expenseData, selectedYear, setSelectedYear }) => {
  return (
    <div style={{ padding: "20px 20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ paddingLeft: "15" }}> Filter Expense by Year </h3>
        </div>
        <select
          style={{ width: "140px", height: "35px" }}
          onChange={(e) => {
            setSelectedYear(e.target.value);
          }}
          value={selectedYear}
          name="pets"
          id="year-select"
        >
          <option value="2022"> 2022 </option>
          <option value="2023"> 2023 </option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "0px auto",
          textAlign: "center",
          // padding: '5px 5px',
        }}
      >
        {[
          { month: 0, name: "Jan" },
          { month: 1, name: "Feb" },
          { month: 2, name: "Mar" },
          { month: 3, name: "Apr" },
          { month: 4, name: "May" },
          { month: 5, name: "Jun" },
          { month: 6, name: "Jul" },
          { month: 7, name: "Aug" },
          { month: 8, name: "Sep" },
          { month: 9, name: "Oct" },
          { month: 10, name: "Nov" },
          { month: 11, name: "Dec" },
        ].map(({ name, month }) => {
          return (
            <div
              key={"list" + name}
              style={{ display: "block", textAlign: "center" }}
            >
              <div
                style={{
                  height: "120px",
                  width: "16px",
                  borderRadius: "0.375rem",
                  zIndex: "999",
                  border: "1px solid purple",
                  transform: "rotate(180deg) scaleX(-1)",
                  background: "white",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    height:
                      expenseData.overAllExpense > 0 && expenseData[month] > 0
                        ? (expenseData[month] / expenseData.overAllExpense) *
                            100 +
                          "%"
                        : 0,
                    width: "100%",
                    background: "#CF9FFF",
                    borderRadiusBottomLeft: "0.375rem",
                    borderRadiusBottomRight: "0.375rem",
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0",
                  }}
                ></div>
              </div>
              <div style={{ textAlign: "center", fontSize: "12px" }}>
                {" "}
                {name}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseFilter;
