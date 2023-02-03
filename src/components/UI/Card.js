const Card = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: '0.375rem',
        padding: '10px 10px',
        width: '65%',
        margin: '0 auto',
        marginTop: '15px',
        marginBottom: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
