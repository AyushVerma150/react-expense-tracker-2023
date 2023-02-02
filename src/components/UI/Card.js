const Card = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: '0.375rem',
        padding: '10px 10px',
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
        width: '75%',
        margin: '0 auto',
        marginTop: '15px',
        marginBottom: '15px',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
